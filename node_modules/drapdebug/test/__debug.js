/* global beforeEach */
const expect = require('chai').expect;
const util = require('../src/debug');
require('mocha-sinon');

describe('Running Debugger Tests:', () => {
  beforeEach(function () {
    this.sinon.stub(console, 'log');
  });


  it('All tests:', (done) => {
    util.debug('testing');
    /* eslint-disable no-unused-expressions */
    expect(console.log.calledOnce).to.be.true;
    done();
  });
});
