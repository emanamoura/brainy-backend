import { Request, Response } from 'express';
import { container } from 'tsyringe';

import HTTPResponse from '@/shared/infra/http/models/http-response';
import UseCaseController from '@/shared/use-cases/use-case-controller';

import DeleteUserUseCase from './delete-user-use-case';

class DeleteUserController implements UseCaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    const user = await deleteUserUseCase.execute({ id });
    const userJson = user.toJson();
    return new HTTPResponse(response).ok(userJson);
  }
}

export default DeleteUserController;
