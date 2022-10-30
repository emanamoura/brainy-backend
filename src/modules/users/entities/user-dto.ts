import City from '@/modules/city/entities/city';
import Hobbie from '@/modules/hobbie/entities/hobbie';
import Entity, { EntityProps } from '@/shared/entities/entity';
import User from './user';

interface UserDTOProps {
  user: User;
  hobbies: Hobbie[];
}

class UserDTO {
  readonly user: User;
  readonly hobbies: Hobbie[];

  private constructor({ user, hobbies }: UserDTOProps) {
    this.user = user;
    this.hobbies = hobbies;
  }

  static create(userProps: UserDTOProps) {
    const user = new UserDTO(userProps);
    return user;
  }

  toJson() {
    const { user, hobbies } = this;
    return {
      user,
      hobbies,
    };
  }
}

export default UserDTO;
