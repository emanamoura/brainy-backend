import { inject, injectable } from 'tsyringe';

import CityRepository from '@/modules/city/repositories/city-repository';
import HobbieRepository from '@/modules/hobbie/repositories/hobbie-repository';
import UserHobbie from '@/modules/user-hobbie/entities/user-hobbie';
import UserHobbieRepository from '@/modules/user-hobbie/repositories/user-hobbie-repository';
import User from '@/modules/users/entities/user';
import UserRepository from '@/modules/users/repositories/user-repository';
import BadRequestHTTPError from '@/shared/infra/http/errors/bad-request-http-error';
import NotFoundHTTPError from '@/shared/infra/http/errors/not-found-http-error';
import UseCaseService from '@/shared/use-cases/use-case-service';

import UserDTO from '../../entities/user-dto';

interface UpdateUserRequest {
  id: string;
  name: string;
  email: string;
  cityId: string;
  hobbies: string[];
}

@injectable()
class UpdateUserUseCase implements UseCaseService<UpdateUserRequest, UserDTO> {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
    @inject('CityRepository')
    private cityRepository: CityRepository,
    @inject('UserHobbieRepository')
    private userHobbieRepository: UserHobbieRepository,
    @inject('HobbieRepository')
    private hobbierepository: HobbieRepository,
  ) {}

  async execute({ id, name, email, cityId, hobbies }: UpdateUserRequest): Promise<UserDTO> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundHTTPError('User does not exists');
    }

    const userWithExistingEmail = await this.userRepository.findByEmail(email);

    if (userWithExistingEmail && userWithExistingEmail.id !== user.id) {
      throw new BadRequestHTTPError('E-mail already registered');
    }

    const cityExists = await this.cityRepository.findById(cityId);
    if (!cityExists) {
      throw new BadRequestHTTPError('City does not exists');
    }

    const userDTO = User.create({
      name,
      email,
      city: cityExists,
    });

    const updatedUser = await this.userRepository.update(id, userDTO);
    const userHobbies = hobbies.map((hobbie) => UserHobbie.create({ userId: user.id, hobbieId: hobbie }));
    await this.userHobbieRepository.deleteMany(user.id);
    await this.userHobbieRepository.createMany(userHobbies);
    const updatedHobbies = await this.hobbierepository.findAllById(user.id);
    return UserDTO.create({ user: updatedUser, hobbies: updatedHobbies });
  }
}

export default UpdateUserUseCase;
