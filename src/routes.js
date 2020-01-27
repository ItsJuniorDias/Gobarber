import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Alexandre Junior',
    email: 'juniordias_@live.com',
    password_hash: '12343232',
  });

  return res.json(user);
});

export default routes;
