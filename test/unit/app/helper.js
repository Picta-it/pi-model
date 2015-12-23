'use strict';

require('chai').should();

var pwd    = process.env.PWD,
    path   = require('path'),
    Helper = require(path.join(pwd, 'app/helper'));

describe('Helper', function() {
  describe('Helper methods', function() {
    var validation, _Helper;

    before(function() {
      _Helper = Helper;
    });

    it('should contain some method', function() {
      (typeof _Helper.dummyValidator).should.equal('function');
    });

    it('should contain have method on instanciation', function() {
      let validator = new _Helper.dummyValidator();

      (typeof validator.validate).should.equal('function');

      (function() {
        validation = validator.validate();
      }).should.not.throw(Error);
    });

    it('should return the good values', function() {
      (validation.isValid).should.equal(true);
      // (validation.validations).should.equal([]);
    });
  });
});
