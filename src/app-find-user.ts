import * as express from 'express';
import {NextFunction} from 'express';
import {createLog} from './logs/logging';
import {isNil, prop, path} from './ramda-functions';
import * as asyncHandler from 'express-async-handler';

const log = createLog(__filename);

const namespace = 'https://your-api-name-space-in-auth0/';

const getRole = (user: any): string => {
  const roles = prop(`${namespace}roles`, user);
  log.debug('findUser user: %s, %j, roles: %j, %s, roles.length: %s, email: %s',
    user, user, roles, typeof roles, roles.length);
  return isNil(prop('0', roles)) ? 'User' : prop('0', roles);
};

const getUserEmail = (req: express.Request): string => {
  return path(['user', 'email'], req) as string;
};

const findUser = asyncHandler(async (req: express.Request & {user: string}, res: express.Response, next: NextFunction) => {
  const user: {[key: string]:string} = prop('user', req) as unknown as {[key: string]:string};

  if(isNil(user)) {
    return next({err: 'user not found'});
  }

  const email = user.email = prop(`${namespace}email`, user);

  user.role = getRole(user);

  log.debug('findUser user: %s, %j, email: %s',
    user, user, email);
  next();
});

export {
  findUser,
  getUserEmail,
};
