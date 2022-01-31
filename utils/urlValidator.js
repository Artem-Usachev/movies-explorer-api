const validator = require('validator');
const BadRequestError = require('../errors/bad-request-error');

const urlCheckMethod = (value) => {
  const result = validator.isURL(value);
  if (result) {
    return value;
  }
  throw new BadRequestError('Введённый URL некорректный');
};

module.exports = urlCheckMethod;
