import 'dotenv/config';
import express from 'express';
import './database';
import 'express-async-errors';
import * as Sentry from '@sentry/node';
import path from 'path';
import Youch from 'youch';
import cors from 'cors';
import sentryConfig from './config/sentry';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHanddler();
  }

  middlewares() {
    // Log de erros (antes de qualquer evento)
    Sentry.init(sentryConfig);
    this.server.use(Sentry.Handlers.requestHandler());

    this.server.use(
      cors({
        // origin: 'http://endereco',
      })
    );

    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHanddler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}
export default new App().server;
