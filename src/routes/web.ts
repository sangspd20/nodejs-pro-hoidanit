import {
  getCreateUserPage,
  getHomePage,
  postCreateUser,
  postUpdateUser,
} from 'controllers/user.controller';
import express, { Express } from 'express';

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get('/', getHomePage);
  router.get('/create-user', getCreateUserPage);
  router.post('/handle-create-user', postCreateUser);
  router.post('/handle-update-user', postUpdateUser);

  app.use('/', router);
};

export default webRoutes;
