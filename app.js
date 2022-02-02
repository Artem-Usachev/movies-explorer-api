const express = require('express');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
require('dotenv').config();
const helmet = require('helmet');

const userRouter = require('./router/users');
const movieRouter = require('./router/movies');
const authRoute = require('./router/auth');

const auth = require('./middlewares/auth');
const errHandler = require('./middlewares/error-handler');
const corsMiddleware = require('./middlewares/cors-defend');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const NotFoundError = require('./errors/not-found-error');
const limiter = require('./utils/limiter');

const { PORT = 3000, MONGO_URL } = process.env;
const app = express();
async function main() {
  await mongoose.connect(MONGO_URL);
}
main().catch((err) => console.log(err));

app.use(requestLogger);
app.use(limiter);
app.use(express.json());
app.use(corsMiddleware);
app.use(helmet());
app.use(authRoute);
app.use(auth);
app.use(userRouter);
app.use(movieRouter);
app.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});
app.use(errorLogger);
app.use(errors());
app.use(errHandler);

app.listen(PORT, () => {
  console.log('Server started');
});
