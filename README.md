# PiModel

PiModel is a simple data model representation that allows data validation and some basic features.

It is aimed to be used in a more organized data accesses *(repository, datamapper, datasource, etc.)*.

## Install

```javascript
npm install pi-model
```

## Usage

```javascript
// New model definition 
var ModelBuilder = require('pi-model'),
    User         = new ModelBuilder({
      'name' : 'UserModel'
    });

// Model usage
var myUser = new User({
  'firstName' : 'John',
  'lastName'  : 'Doe'
});
```

### Builder options

The model builder accepts the following options :

```javascript
{
  'name' : String,
  'description' : Object,
  'schema' : Object,
  'validator' : Function
}
```

- `name` : String used to define the model
- `description` : Object describing custom information of the model
- `schema` : Object used to describe data format
- `validator` : Class used to validate data over the schema

### Validator

You can use (pi-validator-tv4)[https://www.npmjs.com/package/pi-validator-tv4] if needed. It is a simple encapsulation of tv4 (validation with JSON schema).

#### Customize

If you need to create your own validator, you can base extend (pi-validator)[https://www.npmjs.com/package/pi-validator].

It is an abstraction of the validator.
