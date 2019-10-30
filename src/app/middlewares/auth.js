export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);

  return next();
};
