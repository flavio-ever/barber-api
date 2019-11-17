import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', AuthMiddleware, UserController.store);
routes.put('/users', AuthMiddleware, UserController.update);
routes.post('/sessions', SessionController.store);
routes.get('/providers', ProviderController.index);
routes.post(
  '/files',
  AuthMiddleware,
  upload.single('file'),
  FileController.store
);
export default routes;
