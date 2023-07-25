import { Router } from 'express';
import RoasterController from './roasterController';

export default function roasters(): Router {
  const router = Router();
  const controller = new RoasterController();

  router.use('/', (req, res) => {
    res.json(controller.index());
  });

  return router;
}
