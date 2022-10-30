import { inject, injectable } from 'tsyringe';

import CityRepository from '@/modules/city/repositories/city-repository';
import HobbieRepository from '@/modules/hobbie/repositories/hobbie-repository';
import UserHobbie from '@/modules/user-hobbie/entities/user-hobbie';
import UserHobbieRepository from '@/modules/user-hobbie/repositories/user-hobbie-repository';
import User from '@/modules/users/entities/user';
import UserRepository from '@/modules/users/repositories/user-repository';
import BadRequestHTTPError from '@/shared/infra/http/errors/bad-request-http-error';
import UseCaseService from '@/shared/use-cases/use-case-service';

import UserDTO from '../../entities/user-dto';

interface CreateUserRequest {
  name: string;
  email: string;
  cityId: string;
  hobbies: string[];
}

@injectable()
class CreateUserUseCase implements UseCaseService<CreateUserRequest, UserDTO> {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,

    @inject('UserHobbieRepository')
    private userHobbieRepository: UserHobbieRepository,

    @inject('CityRepository')
    private cityRepository: CityRepository,

    @inject('HobbieRepository')
    private hobbierepository: HobbieRepository,
  ) {}

  async execute({ name, email, cityId, hobbies }: CreateUserRequest): Promise<UserDTO> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new BadRequestHTTPError('User already exists');
    }
    const cityExists = await this.cityRepository.findById(cityId);

    if (!cityExists) {
      throw new BadRequestHTTPError('City does not exists');
    }

    const userData = User.create({
      name,
      email,
      city: cityExists,
    });

    const user = await this.userRepository.create(userData);
    const userHobbies = hobbies.map((hobbie) => UserHobbie.create({ userId: user.id, hobbieId: hobbie }));
    await this.userHobbieRepository.createMany(userHobbies);
    const hobbiesCreated = await this.hobbierepository.findAllById(user.id);

    return UserDTO.create({ user, hobbies: hobbiesCreated });
  }
}

export default CreateUserUseCase;
