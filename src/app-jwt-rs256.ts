/**
 * Created by hxg on 12/10/17.
 */

// import jwt from 'express-jwt';
// import * as jwksRsa from 'jwks-rsa';
import jwt = require('express-jwt');
import jwksRsa = require('jwks-rsa');
import unless from 'express-unless';
import { createLog } from './logs/logging';
const log = createLog(__filename);
import { has, prop, path, isNilOrEmpty } from './ramda-functions';

log.debug('app-jwt start AUTH0_DOMAIN: %s', process.env.AUTH0_DOMAIN);
if(isNilOrEmpty(process.env.AUTH0_DOMAIN)) {
  throw new Error(`You must provide process.env.AUTH0_DOMAIN to activate JWT`);
}
const jwksUri = `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`;
const hasLowercase = has('authorization');
const hasUppercase = has('Authorization');
const getAuthorization = (headers: any) => {
  return hasLowercase(headers)
    ? prop('authorization', headers)
    : hasUppercase(headers)
      ? prop('Authorization', headers)
      : '';
};

const containsBearer = (authorization: any) =>
  authorization.split(' ')[0] === 'Bearer';
const extractAuthorizationToken = (req: any) => {
  const authorization = getAuthorization(prop('headers', req));
  return containsBearer(authorization)
    ? authorization.split(' ')[1]
    : path(['query', 'token'], req);
};

const jwtAuth0 = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 25,
    jwksUri,
  }),
  algorithms: ['RS256'],
  getToken: (req: any) => {
    return extractAuthorizationToken(req);
  },
  unless,
});

export {
  jwtAuth0,
};
