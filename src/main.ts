import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

const express = require('express');
const app = express();

dotenv.config();
const port = process.env.PORT || 3038;

app.get('/', async(request: Request, response: Response) => {
  response.send('Hello');
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});