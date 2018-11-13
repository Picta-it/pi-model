'use strict';

var pwd             = '..',
    path            = require('path'),
    AbstractBuilder = require(path.join(pwd, 'app/modelAbstractBuilder')),
    _builder        = new WeakMap();

class ModelDirector {
  constructor(builder) {
    if(!(builder instanceof AbstractBuilder)) {
      throw(new Error('The builder is not an instance of the model abstract builder'));
    }

    _builder.set(this, builder);
  }

  constructModel(options) {
    options = options || {};

    _builder.get(this).setName(options.name)
      .setDescription(options.description)
      .setValidator(options.validator);
  }
  
  /**
   * Get the model
   * @return {Object} Model
   */
  getModel() {
    return _builder.get(this).getModel();
  }
}

module.exports = ModelDirector;
