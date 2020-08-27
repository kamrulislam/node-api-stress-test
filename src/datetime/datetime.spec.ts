import * as dotenv from 'dotenv';
dotenv.config();
import {datetime} from '../datetime/DateTime';
import { createLog } from '../logs/logging';
const log = createLog(__filename);

describe('datetime', () => {

  it('creates a currentTimestamp', (done) => {
    console.log(datetime.currentTimestamp());
    const chai = require('chai');
    const expect = chai.expect;
    expect(typeof datetime.currentTimestamp()).to.equal('string');
    expect(datetime.currentTimestamp().length).to.equal(19);

    done();
  });
  it('creates a moment format', (done) => {
    console.log(datetime.moment().format());
    const chai = require('chai');
    const expect = chai.expect;
    expect(typeof datetime.moment().format()).to.equal('string');
    expect(datetime.moment().format().length).to.equal(25);

    done();
  });

  it('creates a momentTz format', (done) => {
    console.log(datetime.momentTz().format());
    const chai = require('chai');
    const expect = chai.expect;
    expect(typeof datetime.momentTz().format()).to.equal('string');
    expect(datetime.momentTz().format().length).to.equal(25);

    done();
  });

});
