import City from '@/modules/city/entities/city';
import Entity, { EntityProps } from '@/shared/entities/entity';

interface UserProps extends EntityProps {
  name: string;
  email: string;
  city: City;
}

class User extends Entity {
  readonly name: string;
  readonly email: string;
  readonly city: City;

  private constructor({ id, name, email, city, createdAt }: UserProps) {
    super({ id, createdAt });
    this.name = name;
    this.email = email;
    this.city = city;
  }

  static create(userProps: UserProps) {
    const user = new User(userProps);
    return user;
  }

  toJson() {
    const { id, name, email, city, createdAt } = this;
    return {
      id,
      name,
      email,
      city,
      createdAt,
    };
  }
}

export default User;
