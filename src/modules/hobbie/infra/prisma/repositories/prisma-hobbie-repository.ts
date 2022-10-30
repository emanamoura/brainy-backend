import Hobbie from '@/modules/hobbie/entities/hobbie';
import HobbieRepository from '@/modules/hobbie/repositories/hobbie-repository';
import prisma from '@/shared/infra/prisma/prisma-client';

class PrismaHobbieRepository implements HobbieRepository {
  async findAll(): Promise<Hobbie[]> {
    const hobbie = await prisma.hobbie.findMany({});
    const hobbies = hobbie.map((hobbie) => {
      const hobbieData = {
        id: hobbie.id,
        name: hobbie.name,
      };
      return Hobbie.create(hobbieData);
    });
    return hobbies;
  }

  async findAllById(userId: string): Promise<Hobbie[]> {
    const hobbie = await prisma.hobbie.findMany({
      where: {
        UserHobbie: {
          some: {
            userId,
          },
        },
      },
    });
    const hobbies = hobbie.map((hobbie) => {
      const hobbieData = {
        id: hobbie.id,
        name: hobbie.name,
      };
      return Hobbie.create(hobbieData);
    });
    return hobbies;
  }
}

export default PrismaHobbieRepository;
