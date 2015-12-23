'use strict';

class Helper {}

Helper.dummyValidator = function() {
  this.validate = function() {
    return {
      isValid:     true,
      validations: []
    };
  };
};

module.exports = Helper;
