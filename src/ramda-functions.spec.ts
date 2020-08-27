/**
 * Created by hxg on 12/10/17.
 */
import { createLog } from './logs/logging';
const log = createLog(__filename);
import { isNilOrEmpty } from './ramda-functions';

describe('isNilOrEmpty',  () => {
  const chai = require('chai');
  const expect = chai.expect;

  it('null should be true',  (done) => {
    const val: number = null;
    const evaluated = isNilOrEmpty(val);

    log.debug('isNilOrEmpty evaluated: %s', evaluated);
    expect(evaluated).to.be.true;
    done();
  });

});
