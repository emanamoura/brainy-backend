import { Router } from 'express';

import ListCitiesController from '@/modules/city/use-cases/list-cities/list-cities-controller';

const cityRouter = Router();

const listCitiesController = new ListCitiesController();
cityRouter.get('/', listCitiesController.handle);

export default cityRouter;
