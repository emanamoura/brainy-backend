import { inject, injectable } from 'tsyringe';

import HobbieRepository from '@/modules/hobbie/repositories/hobbie-repository';
import UserRepository from '@/modules/users/repositories/user-repository';
import NotFoundHTTPError from '@/shared/infra/http/errors/not-found-http-error';
import UseCaseService from '@/shared/use-cases/use-case-service';

import UserDTO from '../../entities/user-dto';

@injectable()
class GetAllUserUseCase implements UseCaseService<string, UserDTO[]> {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,

    @inject('HobbieRepository')
    private hobbieRepository: HobbieRepository,
  ) {}

  async execute(): Promise<UserDTO[]> {
    const users = await this.userRepository.findAll();
    if (!users) {
      throw new NotFoundHTTPError('There is not users');
    }

    const usersToController = await Promise.all(
      users.map(async (user) => {
        const hobbies = await this.hobbieRepository.findAllById(user.id);
        return UserDTO.create({ user, hobbies });
      }),
    );

    return usersToController;
  }
}

export default GetAllUserUseCase;
