import { Request, Response } from 'express';
import { container } from 'tsyringe';

import HTTPResponse from '@/shared/infra/http/models/http-response';
import UseCaseController from '@/shared/use-cases/use-case-controller';

import ListHobbiesUseCase from './list-cities-use-case';

class ListCitiesController implements UseCaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listHobbiesUseCase = container.resolve(ListHobbiesUseCase);
    const hobbies = await listHobbiesUseCase.execute();
    const hobbiesJson = hobbies.map((hobbie) => hobbie.toJson());
    return new HTTPResponse(response).ok(hobbiesJson);
  }
}

export default ListCitiesController;
