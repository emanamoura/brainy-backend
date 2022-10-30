import { inject, injectable } from 'tsyringe';

import HobbieRepository from '@/modules/hobbie/repositories/hobbie-repository';
import UserRepository from '@/modules/users/repositories/user-repository';
import NotFoundHTTPError from '@/shared/infra/http/errors/not-found-http-error';
import UseCaseService from '@/shared/use-cases/use-case-service';

import UserDTO from '../../entities/user-dto';

@injectable()
class GetUserUseCase implements UseCaseService<string, UserDTO> {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,

    @inject('HobbieRepository')
    private hobbieRepository: HobbieRepository,
  ) {}

  async execute(id: string): Promise<UserDTO> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundHTTPError('User does not exists');
    }

    const hobbies = await this.hobbieRepository.findAllById(user.id);

    return UserDTO.create({ user, hobbies });
  }
}

export default GetUserUseCase;
