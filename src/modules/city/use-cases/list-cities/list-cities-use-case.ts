import { inject, injectable } from 'tsyringe';

import NotFoundHTTPError from '@/shared/infra/http/errors/not-found-http-error';
import UseCaseService from '@/shared/use-cases/use-case-service';

import City from '../../entities/city';
import CityRepository from '../../repositories/city-repository';

@injectable()
class ListCitiesUseCase implements UseCaseService<void, City[]> {
  constructor(
    @inject('CityRepository')
    private cityRepository: CityRepository,
  ) {}

  async execute(): Promise<City[]> {
    const cities = await this.cityRepository.findAll();
    if (!cities || cities === null) {
      new NotFoundHTTPError('There are not cities');
    }
    return cities;
  }
}

export default ListCitiesUseCase;
