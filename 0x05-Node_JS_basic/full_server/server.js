import express from 'express';
import path from 'path';
import appRoutes from './routes/index';

const app = express();
app.use((req, res, next) => {
  // eslint-disable-next-line prefer-destructuring
  req.dbName = path.join(path.dirname(__dirname),
    process.argv[2].split('/')[1]);
  next();
});
app.use(appRoutes);

app.listen(1245);

export default app;
