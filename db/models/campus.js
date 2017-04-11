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
    type: Sequelize.BLOB
  }
}, {
  defaultScope: {
    include: [Student] // includes all associated students when querying campus table, right??
  }
})
