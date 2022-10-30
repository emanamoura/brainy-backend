import City from '@/modules/city/entities/city';
import User from '@/modules/users/entities/user';
import UserRepository from '@/modules/users/repositories/user-repository';
import prisma from '@/shared/infra/prisma/prisma-client';

class PrismaUserRepository implements UserRepository {
  async create({ name, email, city }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        city: {
          connect: {
            id: city.id,
          },
        },
      },
      include: {
        city: true,
      },
    });
    return User.create({
      ...user,
      city,
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        city: true,
      },
    });
    if (!user) {
      return null;
    }
    const city = City.create(user.city);

    return User.create({
      ...user,
      city,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        city: true,
      },
    });
    if (!user) {
      return null;
    }
    const city = City.create(user.city);
    return User.create({
      ...user,
      city,
    });
  }

  async findAll(): Promise<User[] | null> {
    const users = await prisma.user.findMany({
      include: {
        city: true,
      },
    });
    if (!users) {
      return null;
    }
    const usersDTO = users.map((user) => {
      const city = City.create(user.city);
      return User.create({ ...user, city });
    });
    return usersDTO;
  }

  async update(id: string, { name, email, city }: User): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        city: {
          connect: {
            id: city.id,
          },
        },
      },
      include: {
        city: true,
      },
    });

    return User.create({
      ...user,
      city,
    });
  }

  async delete(id: string): Promise<User> {
    const user = await prisma.user.delete({
      where: { id },
      include: {
        city: true,
      },
    });

    const city = City.create(user.city);
    return User.create({
      ...user,
      city,
    });
  }
}

export default PrismaUserRepository;
