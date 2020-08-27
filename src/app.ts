import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as nocache from 'nocache';
import * as bodyParser from 'body-parser';
import * as express from 'express';
dotenv.config();
import env from './app-env';
env.init(process.env.TARGET_ENV);

import { createLog } from './logs/logging';
const log = createLog(__filename);

// uncomment below to activate jwt auth0
// import { jwtAuth0 } from './app-jwt-rs256';
// import { findUser } from './app-find-user';

// routes
import {index} from './routes/index';
import {errorHandler} from './app-error-handler';

export const app = express();

app.set('port', process.env.API_PORT || 3000);
app.use(nocache());
app.use(cors({allowedHeaders: ['Content-Type', 'Authorization', 'Content-Encoding']}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// uncomment below to activate jwt auth0
// app.use('/', jwtAuth0.unless({ path: [
//     '/welcome',
//   ]}));
app.use('/', index);

// error handler middleware must be added at the end
app.use(errorHandler);
