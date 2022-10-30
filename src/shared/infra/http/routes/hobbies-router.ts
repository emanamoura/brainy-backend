import { Router } from 'express';

import ListHobbiesController from '@/modules/hobbie/use-cases/list-hobbies/list-hobbies-controller';

const hobbieRouter = Router();

const listHobbiesController = new ListHobbiesController();
hobbieRouter.get('/', listHobbiesController.handle);

export default hobbieRouter;
