import Entity, { EntityProps } from '@/shared/entities/entity';

interface HobbieProps extends EntityProps {
  name: string;
}

class Hobbie extends Entity {
  readonly name: string;

  private constructor({ id, name, createdAt }: HobbieProps) {
    super({ id, createdAt });
    this.name = name;
  }

  static create(hobbieProps: HobbieProps) {
    const hobbie = new Hobbie(hobbieProps);
    return hobbie;
  }

  toJson() {
    const { id, name, createdAt } = this;

    return {
      id,
      name,
      createdAt,
    };
  }
}

export default Hobbie;
