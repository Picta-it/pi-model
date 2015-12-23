'use strict';

var _            = require('lodash'),
    _name        = new WeakMap(),
    _description = new WeakMap(),
    _validator   = new WeakMap();

/**
 * Build the domain context to retrieve model informations
 * @param  {Object} context Model context
 * @return {Object}         Built context
 */
var buildModelContext = function(context) {
  return {
    '_' : {
      'name'        : _name.get(context),
      'description' : _description.get(context),
      'validator'   : _validator.get(context)
    }
  };
};

/**
 * Model returned once built
 * @class 
 * @param {Object} context Context used to retrieve private attributes (WeakMap)
 * @param {Object} data    Data
 */
var BuiltModel = function(context, data) {
  var validator  = _validator.get(context),
      validation = validator.validate(data);

  if(!validation.isValid) {
    throw(new Error('The data is not valid for ' + _name.get(context)));
  }

  _.merge(this, buildModelContext(context), data);

  return this;
};

/**
 * Model constructed
 */
class Model {
  /**
   * Set the model validator
   * @param {Function} validator_validator to check data
   */
  setValidator(validator) {
    _validator.set(this, validator);

    return this;
  }

  /**
   * Set the model name
   * @param {String} name Model name
   */
  setName(name) {
    _name.set(this, name);

    return this;
  }

  /**
   * Set the model description
   * @param {Object} description Model description
   */
  setDescription(description) {
    _description.set(this, description);

    return this;
  }

  /**
   * Get the model validator
   * @return {Function} Model validator to check data
   */
  getValidator() {
    return _validator.get(this);
  }

  /**
   * Get the model name
   * @return {String} Model name
   */
  getName() {
    return _name.get(this);
  }

  /**
   * Get the model description
   * @return {Object} Model description
   */
  getDescription() {
    return _description.get(this);
  }

  /**
   * Get the new model built
   * @return {Object} New model
   */
  getModel() {
    return BuiltModel.bind(null, this);
  }
}

module.exports = Model;
