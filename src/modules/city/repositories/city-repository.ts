import City from '@/modules/city/entities/city';

interface CityRepository {
  findAll(): Promise<City[]>;
  findById(id: string): Promise<City | null>;
}

export default CityRepository;
