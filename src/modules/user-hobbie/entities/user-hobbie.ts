import Entity, { EntityProps } from '@/shared/entities/entity';

interface UserHobbieProps extends EntityProps {
  hobbieId: string;
  userId: string;
}

class UserHobbie extends Entity {
  readonly hobbieId: string;
  readonly userId: string;

  private constructor({ id, hobbieId, userId, createdAt }: UserHobbieProps) {
    super({ id, createdAt });
    this.hobbieId = hobbieId;
    this.userId = userId;
  }

  static create(userHobbieProps: UserHobbieProps) {
    const userHobbie = new UserHobbie(userHobbieProps);
    return userHobbie;
  }

  toJson() {
    const { hobbieId, userId } = this;
    return {
      hobbieId,
      userId,
    };
  }
}

export default UserHobbie;
