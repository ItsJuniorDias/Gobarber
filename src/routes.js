import { Router } from "express";
import User from './app/models/User';

const routes = new Router();

routes.get("/", async (req, res) => {
    const user = await User.create({
        name: 'Junior Dias',
        email: 'juniordias_@live.com',
        password_hash: '122345'
    });
  return res.json(user);
});

export default routes;
