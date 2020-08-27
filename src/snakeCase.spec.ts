/**
 * Created by hxg on 12/10/17.
 */
import { createLog } from './logs/logging';
const log = createLog(__filename);
import { camelCase } from './camelCase';

describe('CamelCase',  () => {
  const chai = require('chai');
  const expect = chai.expect;
  const camel = require('./CamelCase');

  it('should transform snakeCaseObject to camelCaseObject',  (done) => {
    const snakeCaseObject = {id:'12345',given_name:'Hiroki',family_name:'Gota',
      alreadyCcamel:'?', what_if_array:[{snake_case:12345}]};

    log.info('snakeCaseObject: %j', snakeCaseObject);
    expect(snakeCaseObject).to.be.lowercase();
    const camelCaseObject = camelCase(snakeCaseObject);
    log.info('camelCaseObject: %j', camelCaseObject);
    expect(camelCaseObject).to.be.ok;
    done();

  });

});
