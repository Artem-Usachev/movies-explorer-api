const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
  try {
    const { JWT_SECRET = 'strongest-key-ever' } = process.env;
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedError('Необходима авторизация');
    }

    const token = authorization.replace('Bearer ', '');
    let payload;

    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      const Error = new UnauthorizedError('Необходима авторизация');
      next(Error);
    }

    req.user = payload;

    next();
  } catch (err) {
    next(err);
  }
};
