import express, { Express } from 'express';
import cors from 'cors';
import roasters from './roasters/router';

export default function createApp(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/roasters', roasters());
  return app;
}
