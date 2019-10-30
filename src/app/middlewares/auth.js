import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status('401').json({ error: 'Token não inf' });
  }
  const [, token] = authHeader.split(' '); // Quebra o header num array e pega o segundo elemento (token sem o Bearer)

  try {
    // Transforma uma funcao que usa callbacks numa promisse
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id; // Adiciona em todas as requisicoes que utilizaram este middleware o ID do usuário
    return next(); // Middleware tem sempre req, res e next
  } catch (error) {
    return res.status('401').json({ error: 'Token inválido' });
  }
};
