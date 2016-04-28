'use strict';

require('chai').should();

var pwd    = '../../..',
    path   = require('path'),
    Model  = require(path.join(pwd, 'app/model'));

describe('Model', function() {
  describe('Model instanciation', function() {
    it('should not throw on instanciation', function() {
      (function() {
        new Model();
      }).should.not.throw(Error);
    });
  });

  describe('Model methods', function() {
    var model;

    before(function() {
      model = new Model();
    });

    describe('Model setters', function() {
      it('should not throw on call', function() {
        (function() {
          model.setValidator();
          model.setName();
          model.setDescription();
        }).should.not.throw(Error);
      });

      it('should retrieve the validator set', function() {
        let validatorBefore = new function() {
          this.validate = function() {
            return {
              isValid:     true,
              validations: []
            };
          };
        };

        model.setValidator(validatorBefore);

        let validatorAfter = model.getValidator();

        (validatorBefore).should.equal(validatorAfter);
      });

      it('should retrieve the name set', function() {
        let nameBefore = 'someDummyResult';

        model.setName(nameBefore);

        let nameAfter = model.getName();

        (nameBefore).should.equal(nameAfter);
      });

      it('should retrieve the description set', function() {
        let descriptionBefore = {
          'key' : 'someDummyResult'
        };

        model.setDescription(descriptionBefore);

        let descriptionAfter = model.getDescription();

        (descriptionBefore).should.equal(descriptionAfter);
      });

      it('should retrieve the model built', function() {
        let builtModel = model.getModel();

        new builtModel({});

        (typeof builtModel).should.equal('function');
      });
    });

    it('should throw when data is invalid', function() {
      let validator = new function() {
        this.validate = function() {
          return {
            isValid:     false,
            validations: []
          };
        };
      };

      model.setValidator(validator);

      let builtModel = model.getModel();

      (function() {
        new builtModel({});
      }).should.throw(Error);
    });

    describe('model getters', function() {
      it('should not throw on call', function() {
        (function() {
          model.getValidator();
          model.getName();
          model.getDescription();
        }).should.not.throw(Error);
      });
    });

    describe('model getModel', function() {
      it('should not throw on call', function() {
        (function() {
          model.getValidator();
          model.getName();
          model.getDescription();
        }).should.not.throw(Error);
      });
    });
  });
});
