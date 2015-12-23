'use strict';

require('chai').should();

var pwd     = process.env.PWD,
    path    = require('path'),
    Builder = require(path.join(pwd, 'app/modelBuilder'));

describe('ModelBuilder', function() {
  describe('ModelBuilder instanciation', function() {
    it('should not throw on instanciation', function() {
      (function() {
        new Builder();
      }).should.not.throw(Error);
    });
  });

  describe('ModelBuilder methods', function() {
    var builder, validator, name, description, Model, model;

    before(function() {
      builder = new Builder();

      validator = new function() {
        this.validate = function() {
          return {
            isValid:     true,
            validations: []
          };
        };
      };

      name = 'dummy';

      description = {};
    });

    it('should have the setValidator function', function() {
      (typeof builder.setValidator).should.equal('function');
    });

    it('should have the setName function', function() {
      (typeof builder.setName).should.equal('function');
    });

    it('should have the setDescription function', function() {
      (typeof builder.setDescription).should.equal('function');
    });

    it('should have the createNewModel function', function() {
      (typeof builder.createNewModel).should.equal('function');
    });

    it('should have the setValidator function', function() {
      (typeof builder.getModel).should.equal('function');
    });

    it('should not throw on setValidator call', function() {
      (function() {
        builder.setValidator(validator);
      }).should.not.throw(Error);
    });

    it('should not throw on setName call', function() {
      (function() {
        builder.setName(name);
      }).should.not.throw(Error);
    });

    it('should not throw on setDescription call', function() {
      (function() {
        builder.setDescription(description);
      }).should.not.throw(Error);
    });

    it('should not throw on getModel call', function() {
      (function() {
        Model = builder.getModel();
      }).should.not.throw(Error);
    });

    it('should not throw on createNewModel call', function() {
      (function() {
        builder.createNewModel();
      }).should.not.throw(Error);
    });

    describe('Model context values', function() {
      before(function() {
        model = new Model();
      });

      it('should have the good validator', function() {
        (validator).should.equal(model._.validator);
      });

      it('should have the good name', function() {
        (name).should.equal(model._.name);
      });

      it('should have the good description', function() {
        // TODO
        // Move comparison to Object comparison
        
        // (description).should.equal(model._.description);
      });
    });
  });
});
