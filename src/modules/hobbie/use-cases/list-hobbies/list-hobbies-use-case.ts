import { inject, injectable } from 'tsyringe';

import NotFoundHTTPError from '@/shared/infra/http/errors/not-found-http-error';
import UseCaseService from '@/shared/use-cases/use-case-service';

import Hobbie from '../../entities/hobbie';
import HobbieRepository from '../../repositories/hobbie-repository';

@injectable()
class ListHobbiesUseCase implements UseCaseService<void, Hobbie[]> {
  constructor(
    @inject('HobbieRepository')
    private hobbiesRepository: HobbieRepository,
  ) {}

  async execute(): Promise<Hobbie[]> {
    const hobbies = await this.hobbiesRepository.findAll();
    if (!hobbies || hobbies === null) {
      new NotFoundHTTPError('There are not hobbies');
    }
    return hobbies;
  }
}

export default ListHobbiesUseCase;
