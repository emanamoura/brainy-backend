import UserHobbie from '@/modules/user-hobbie/entities/user-hobbie';
import UserHobbieRepository from '@/modules/user-hobbie/repositories/user-hobbie-repository';
import prisma from '@/shared/infra/prisma/prisma-client';

class PrismaUserHobbieRepository implements UserHobbieRepository {
  async create({ userId, hobbieId }: UserHobbie): Promise<UserHobbie> {
    const userHobbie = await prisma.userHobbie.create({
      data: {
        userId,
        hobbieId,
      },
      include: {
        hobbie: true,
        user: true,
      },
    });
    return UserHobbie.create(userHobbie);
  }

  async createMany(hobbies: UserHobbie[]): Promise<UserHobbie[]> {
    await prisma.userHobbie.createMany({
      data: [...hobbies],
    });
    const { userId } = hobbies[0];
    const userHobbies = await prisma.userHobbie.findMany({
      where: {
        userId,
      },
    });
    return userHobbies.map((userHobbie) => UserHobbie.create(userHobbie));
  }
  async findManyByUserId(userId: string): Promise<UserHobbie[] | null> {
    const userHobbieData = await prisma.userHobbie.findMany({
      where: { userId },
      include: {
        hobbie: true,
        user: true,
      },
    });
    const userHobbies = userHobbieData.map((userHobbie) => {
      return UserHobbie.create(userHobbie);
    });
    return userHobbieData ? userHobbies : null;
  }

  async findById(id: string): Promise<UserHobbie | null> {
    const userHobbie = await prisma.userHobbie.findUnique({
      where: { id },
      include: {
        hobbie: true,
        user: true,
      },
    });
    return userHobbie ? UserHobbie.create(userHobbie) : null;
  }

  async update(id: string, { hobbieId }: UserHobbie): Promise<UserHobbie> {
    const userHobbie = await prisma.userHobbie.update({
      where: {
        id,
      },
      data: {
        hobbieId,
      },
      include: {
        hobbie: true,
        user: true,
      },
    });
    return UserHobbie.create(userHobbie);
  }

  async delete(id: string): Promise<UserHobbie> {
    const user = await prisma.userHobbie.delete({
      where: { id },
      include: {
        hobbie: true,
        user: true,
      },
    });

    return UserHobbie.create(user);
  }

  async deleteMany(userId: string): Promise<void> {
    await prisma.userHobbie.deleteMany({
      where: { userId },
    });
  }
}

export default PrismaUserHobbieRepository;
