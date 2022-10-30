import { Router } from 'express';

import cityRouter from './city-router';
import hobbieRouter from './hobbies-router';
import userRouter from './user-router';

const appRouter = Router();

appRouter.use('/users', userRouter);
appRouter.use('/hobbie', hobbieRouter);
appRouter.use('/city', cityRouter);

export default appRouter;
