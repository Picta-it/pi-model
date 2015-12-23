'use strict';

require('chai').should();

var pwd      = process.env.PWD,
    path     = require('path'),
    Director = require(path.join(pwd, 'app/modelDirector')),
    Builder  = require(path.join(pwd, 'app/modelBuilder'));

describe('ModelDirector', function() {
  describe('ModelDirector instanciation', function() {
    var builder;

    it('should throw on instanciation with a bad builder', function() {
      (function() {
        class Bad {}

        builder  = new Bad();
        new Director(builder);
      }).should.throw(Error);
    });

    it('should not throw on instanciation', function() {
      (function() {
        builder  = new Builder();
        new Director(builder);
      }).should.not.throw(Error);
    });
  });

  describe('ModelDirector methods', function() {
    var director, builder, options;

    before(function() {
      builder  = new Builder();
      director = new Director(builder);
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

    it('should not throw on constructModel call', function() {
      (function() {
        director.constructModel();
      }).should.not.throw(Error);
    });

    it('should not throw on constructModel call', function() {
      (function() {
        director.constructModel(options);
      }).should.not.throw(Error);
    });

    it('should not throw on getModel call', function() {
      (function() {
        director.getModel();
      }).should.not.throw(Error);
    });    
  });
});
