'use strict';

var pwd           = process.env.PWD,
    path          = require('path'),
    Helper        = require(path.join(pwd, 'app/helper')),
    ModelBuilder  = require(path.join(pwd, 'app/modelBuilder')),
    ModelDirector = require(path.join(pwd, 'app/modelDirector'));

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
    options             = options             || {};
    options.name        = options.name        || '';
    options.description = options.description || {};
    options.validator   = options.validator   || Helper.dummyValidator;

    var builder       = new ModelBuilder(),
        modelDirector = new ModelDirector(builder);

    modelDirector.constructModel(options);

    return modelDirector.getModel();
  }
}

module.exports = PiModel;
