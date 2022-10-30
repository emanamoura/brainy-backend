import { Router } from 'express';

import CreateUserController from '@/modules/users/use-cases/create-user/create-user-controller';
import DeleteUserController from '@/modules/users/use-cases/delete-user/delete-user-controller';
import GetAllUserController from '@/modules/users/use-cases/get-all-users/get-all-user-controller';
import GetUserController from '@/modules/users/use-cases/get-user/get-user-controller';
import UpdateUserController from '@/modules/users/use-cases/update-user/update-user-controller';

const userRouter = Router();

const createUserController = new CreateUserController();
userRouter.post('/', createUserController.handle);

const getUserController = new GetUserController();
userRouter.get('/:id', getUserController.handle);

const getAllUserController = new GetAllUserController();
userRouter.get('/', getAllUserController.handle);

const updateUserController = new UpdateUserController();
userRouter.put('/:id', updateUserController.handle);

const deleteUserController = new DeleteUserController();
userRouter.delete('/:id', deleteUserController.handle);

export default userRouter;
