'use strict';

require('chai').should();

var pwd             = process.env.PWD,
    path            = require('path'),
    AbstractBuilder = require(path.join(pwd, 'app/modelAbstractBuilder'));

describe('AbstractBuilder', function() {
  describe('AbstractBuilder methods', function() {
    it('should throw on instanciation', function() {
      (function() {
        new AbstractBuilder();
      }).should.throw(Error);
    });

    it('should not throw on inheritance instanciation', function() {
      class Child extends AbstractBuilder {}

      (function() {
        new Child();
      }).should.not.throw(Error);
    });

    it('should not throw on method createNewModel call', function() {
      class Child extends AbstractBuilder {}

      let child = new Child();
      
      (function() {
        child.createNewModel();
      }).should.not.throw(Error);
    });

    it('should not throw on method getModel call', function() {
      class Child extends AbstractBuilder {}

      let child = new Child();

      child.createNewModel();
      
      (function() {
        child.getModel();
      }).should.not.throw(Error);
    });

    it('should throw on abstract method setValidator call', function() {
      class Child extends AbstractBuilder {}

      let child = new Child();
      
      (function() {
        child.setValidator();
      }).should.throw(Error);
    });

    it('should throw on abstract method setName call', function() {
      class Child extends AbstractBuilder {}

      let child = new Child();
      
      (function() {
        child.setName();
      }).should.throw(Error);
    });

    it('should throw on abstract method setDescription call', function() {
      class Child extends AbstractBuilder {}

      let child = new Child();
      
      (function() {
        child.setDescription();
      }).should.throw(Error);
    });
  });
});
