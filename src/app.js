// it's important to import the dotenv/config before the api endpoints
// application breaks otherwise
import 'dotenv/config';
import apiRouter from './api';
// import { dbConnection } from './config';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


// eslint-disable-next-line no-undef
//.then(port=>console.log`successful connected to database on port ${port}`)
// eslint-disable-next-line no-undef
//.catch(err=>console.log`error: ${err}`);

// console.log(`result.parsed.MONGODB_URI ${result.parsed.MONGODB_URI}`)

const PORT = process.env.PORT || 3000;

const app = express();

//intergrate middlewares
app.use(bodyParser());
app.use(cors());

// console.log(apiRouter);
app.use('/api', apiRouter);

app.use('/', (req, res) => { res.send('yesso! you got our home page') });

app.listen(PORT, console.log `server successfully started. Listening on port ${PORT}`);