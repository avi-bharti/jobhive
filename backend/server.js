import dotenv from 'dotenv';
dotenv.config();

import express from express;

const port = process.env.PORT || 5000;

const app = express();