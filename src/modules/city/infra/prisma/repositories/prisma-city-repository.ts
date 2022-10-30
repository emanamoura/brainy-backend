import City from '@/modules/city/entities/city';
import CityRepository from '@/modules/city/repositories/city-repository';
import prisma from '@/shared/infra/prisma/prisma-client';

class PrismaCityRepository implements CityRepository {
  async findAll(): Promise<City[]> {
    const city = await prisma.city.findMany();
    const citys = city.map((city) => {
      const cityData = {
        id: city.id,
        city: city.city,
        state: city.state,
      };
      return City.create(cityData);
    });
    return citys;
  }

  async findById(id: string): Promise<City | null> {
    const city = await prisma.city.findUnique({
      where: {
        id,
      },
    });

    return city ? City.create(city) : null;
  }
}

export default PrismaCityRepository;
