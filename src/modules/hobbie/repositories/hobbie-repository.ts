import Hobbie from '@/modules/hobbie/entities/hobbie';

interface HobbieRepository {
  findAll(): Promise<Hobbie[]>;
  findAllById(userId: string): Promise<Hobbie[]>;
}

export default HobbieRepository;
