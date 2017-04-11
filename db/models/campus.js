'use strict';

const Sequelize = require('sequelize');
const db = require('../index.js');
const Student = require('./student');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  }
}, {
  // defaultScope: {
  //   include: [{all: true}] // throwing 'cannot getTable of undefined' but not when eager loading in query
  // }
})
