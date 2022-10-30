import User from '@/modules/users/entities/user';

import UserDTO from '../entities/user-dto';

interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[] | null>;
  update(id: string, updateUser: User): Promise<User>;
  delete(id: string): Promise<User>;
}

export default UserRepository;
