'use strict';

var pwd             = process.env.PWD,
    path            = require('path'),
    AbstractBuilder = require(path.join(pwd, 'app/modelAbstractBuilder')),
    _model            = new WeakMap();

/**
 * 
 */
class ModelBuilder extends AbstractBuilder {
  constructor() {
    super();

    this.createNewModel();
    _model.set(this, this.model);

    return this;
  }

  /**
   * Set the model validator
   * @param {Function} validator Model validator
   */
  setValidator(validator) {
    this.model.setValidator(validator);

    return this;
  }

  /**
   * Set the model name
   * @param {String} name Model name
   */
  setName(name) {
    this.model.setName(name);

    return this;
  }

  /**
   * Set the model desccription
   * @param {String} description Model description
   */
  setDescription(description) {
    this.model.setDescription(description);

    return this;
  }
}

module.exports = ModelBuilder;
