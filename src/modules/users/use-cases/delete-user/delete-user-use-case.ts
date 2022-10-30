import { inject, injectable } from 'tsyringe';

import UserHobbieRepository from '@/modules/user-hobbie/repositories/user-hobbie-repository';
import User from '@/modules/users/entities/user';
import UserRepository from '@/modules/users/repositories/user-repository';
import NotFoundHTTPError from '@/shared/infra/http/errors/not-found-http-error';
import UseCaseService from '@/shared/use-cases/use-case-service';

interface DeleteUserRequest {
  id: string;
}

@injectable()
class DeleteUserUseCase implements UseCaseService<DeleteUserRequest, User> {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,

    @inject('UserHobbieRepository')
    private userHobbieRepository: UserHobbieRepository,
  ) {}

  async execute({ id }: DeleteUserRequest): Promise<User> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new NotFoundHTTPError('User does not exists');
    }
    await this.userHobbieRepository.deleteMany(id);
    const user = await this.userRepository.delete(id);
    return user;
  }
}

export default DeleteUserUseCase;
