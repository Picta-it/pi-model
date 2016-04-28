'use strict';

var pwd    = '..',
    path   = require('path'),
    Model  = require(path.join(pwd, 'app/model'));

/**
 * Abstraction of the model builder
 */
class AbstractModelBuilder {
  constructor() {
    if (this.constructor === AbstractModelBuilder) {
      throw new Error('Can\'t instantiate abstract class!');
    }
  }
  
  /**
   * Create a new model
   * @return {Object} Current instance
   */
  createNewModel() {
    // _model.set(this, new Model());
    this.model = new Model();

    return this;
  }

  /**
   * Get the model
   * @return {Object} Model
   */
  getModel() {
    // return _model.get(this);
    return this.model.getModel();
  }

  /**
   * Abstract method to set the model validator
   * @param {Function} validator Model validator
   */
  setValidator(validator) {
    throw(new Error('You must define setValidator()'));
  }

  /**
   * Abstract method to set the model name
   * @param {String} name Model name
   */
  setName(name) {
    throw(new Error('You must define setName()'));
  }

  /**
   * Abstract method to set the model description
   * @param {Object} description Model description
   */
  setDescription(description) {
    throw(new Error('You must define setDescription()'));
  }
}

module.exports = AbstractModelBuilder;
