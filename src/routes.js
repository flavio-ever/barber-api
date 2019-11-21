import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(AuthMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/shedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post(
  '/files',
  AuthMiddleware,
  upload.single('file'),
  FileController.store
);
export default routes;
