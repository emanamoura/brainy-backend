import { container } from 'tsyringe';

import PrismaCityRepository from '@/modules/city/infra/prisma/repositories/prisma-city-repository';
import CityRepository from '@/modules/city/repositories/city-repository';
import PrismaHobbieRepository from '@/modules/hobbie/infra/prisma/repositories/prisma-hobbie-repository';
import HobbieRepository from '@/modules/hobbie/repositories/hobbie-repository';
import PrismaUserHobbieRepository from '@/modules/user-hobbie/infra/prisma/repositories/prisma-user-hobbie-repository';
import UserHobbieRepository from '@/modules/user-hobbie/repositories/user-hobbie-repository';
import PrismaUserRepository from '@/modules/users/infra/prisma/repositories/prisma-user-repository';
import UserRepository from '@/modules/users/repositories/user-repository';

export function registerRepositorySingletons() {
  container.registerSingleton<UserRepository>('UserRepository', PrismaUserRepository);
  container.registerSingleton<HobbieRepository>('HobbieRepository', PrismaHobbieRepository);
  container.registerSingleton<UserHobbieRepository>('UserHobbieRepository', PrismaUserHobbieRepository);
  container.registerSingleton<CityRepository>('CityRepository', PrismaCityRepository);
}
