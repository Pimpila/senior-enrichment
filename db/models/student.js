'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');

const Campus = require('./campus');

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  }
}, {
  // defaultScope: {
  //   include: [{all: true}] // throwing 'cannot getTable of undefined' but not when eager loading in query
  // }
})
