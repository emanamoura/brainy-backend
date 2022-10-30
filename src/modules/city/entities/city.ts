import Entity, { EntityProps } from '@/shared/entities/entity';

interface CityProps extends EntityProps {
  city: string;
  state: string;
}

class City extends Entity {
  readonly city: string;
  readonly state: string;
  private constructor({ id, city, state, createdAt }: CityProps) {
    super({ id, createdAt });
    this.city = city;
    this.state = state;
  }

  static create(cityProps: CityProps) {
    const city = new City(cityProps);
    return city;
  }

  toJson() {
    const { id, city, state, createdAt } = this;

    return {
      id,
      city,
      state,
      createdAt,
    };
  }
}

export default City;
