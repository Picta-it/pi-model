'use strict';

var dummyValidator = require('pi-validator-dummy'),
    ModelBuilder   = require('./app/modelBuilder'),
    ModelDirector  = require('./app/modelDirector');

/**
 * Represent the new model being created.
 */
class PiModel {
  /**
   * Construct the new model based on its options.
   * @param  {Object} options Options used to create the new model.
   * 
   * Format :
   *
   * ```javascript
   * {
   *   'name' : String,
   *   'description' : Object,
   *   'schema' : Object,
   *   'validator' : Function
   * }
   * ```
   * 
   * @return {Object}         New model built
   */
  constructor(options) {
    let defaultValidator = new dummyValidator(true);

    options              = options             || {};
    options.name         = options.name        || '';
    options.description  = options.description || {};
    options.validator    = options.validator   || defaultValidator;

    var builder       = new ModelBuilder(),
        modelDirector = new ModelDirector(builder);

    modelDirector.constructModel(options);

    return modelDirector.getModel();
  }
}

module.exports = PiModel;
