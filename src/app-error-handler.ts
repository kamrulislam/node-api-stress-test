import {NextFunction} from 'express';
import * as express from 'express';
import {getErrorStatusCode} from './getErrorStatusCode';

import { createLog } from './logs/logging';
const log = createLog(__filename);

export const errorHandler = (err: any, req: express.Request, res: express.Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  log.error('errorHandler err: %s, %j', err, err);
  const statusCode = getErrorStatusCode(err);
  res.status(statusCode);
  res.json({ error: err });
};
