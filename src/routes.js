import { Router } from 'express';

import UserController from './app/controllers/UserController';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Alexandreee',
    email: 'juniordias_@',
    password_hash: '123444',
  });

  return res.json(user);
});

export default routes;
