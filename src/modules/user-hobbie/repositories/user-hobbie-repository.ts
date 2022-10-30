import UserHobie from '../entities/user-hobbie';

interface UserHobbieRepository {
  createMany(hobbies: UserHobie[]): unknown;
  create(user: UserHobie): Promise<UserHobie>;
  findById(id: string): Promise<UserHobie | null>;
  findManyByUserId(userId: string): Promise<UserHobie[] | null>;
  update(id: string, updateUserHobbie: UserHobie): Promise<UserHobie>;
  delete(id: string): Promise<UserHobie>;
  deleteMany(userId: string): Promise<void>;
}

export default UserHobbieRepository;
