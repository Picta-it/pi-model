'use strict';

require('chai').should();

var pwd     = '../..',
    path    = require('path'),
    PiModel = require(path.join(pwd, 'index'));

describe('PiModel', function() {
  describe('PiModel instanciation', function() {
    var options, Model;

    before(function() {
      options  = {
        'name' : 'dummy',
        'description' : {},
        'validator' : new function() {
          this.validate = function() {
            return {
              isValid:     true,
              validations: []
            };
          };
        }
      };
    });

    it('should not throw on empty instanciation', function() {
      (function() {
        new PiModel();
      }).should.not.throw(Error);
    });

    it('should not throw on instanciation', function() {
      (function() {
        Model = new PiModel(options);
      }).should.not.throw(Error);
    });

    it('should create valid models', function() {
      (function() {
        new Model({});
      }).should.not.throw(Error);
    });
  });
});
