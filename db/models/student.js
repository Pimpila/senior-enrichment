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
  defaultScope: {
    include: [Campus] // includes associated campus instance (not just id) when querying student table, right?
  }
})
