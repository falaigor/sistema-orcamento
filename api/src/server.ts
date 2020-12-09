import express from 'express';
import cors from 'cors';

import './database/connection';
import routes from './routes';

const app = express();

app.use((request, response, next) =>{
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
})
app.use(express.json());
app.use(routes);

app.listen(3333);