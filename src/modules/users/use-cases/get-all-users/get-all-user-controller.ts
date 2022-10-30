import { Request, Response } from 'express';
import { container } from 'tsyringe';

import HTTPResponse from '@/shared/infra/http/models/http-response';
import UseCaseController from '@/shared/use-cases/use-case-controller';

import GetAllUserUseCase from './get-all-user-use-case';

class GetAllUserController implements UseCaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllUsersUseCase = container.resolve(GetAllUserUseCase);

    const users = await getAllUsersUseCase.execute();

    const usersJson = users.map((user) => user.toJson());

    return new HTTPResponse(response).ok(usersJson);
  }
}

export default GetAllUserController;
