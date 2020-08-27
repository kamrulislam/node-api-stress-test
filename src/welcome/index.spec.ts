import { createLog } from '../logs/logging';
const log = createLog(__filename);
import * as R from 'ramda';
const { prop } = R;
import * as request from 'supertest';
import { app } from '../app';

import { updateDbToHostIp } from '../updatePostgresHost';
updateDbToHostIp();

describe('index.spec', () => {
  // const app = require('../app');
  const chai = require('chai');
  // const request = require('supertest');
  const expect = chai.expect;
  const assert = chai.assert;

  // const user: JwtUserWithToken = userProfileData.jwtUser1();

  it('get', (done) => {
    request(app)
      .get(`/`)
      // .set('authorization', `Bearer ${user.token}`)
      .expect(200)
      .then((res: any) => {
        const found = prop('body', res);
        log.info('found %j', found);
        expect(found).to.be.ok;

        done();
      })
      .catch((errors: any) => {
        log.error('errors: %s, %j', errors, errors);
        done(errors);
      });
  });

});
