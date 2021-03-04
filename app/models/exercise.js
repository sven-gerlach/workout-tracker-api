const mongoose = require('mongoose')
const set = require('./set')
const {capitalize} = require('../../lib/util')

const exerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    set: capitalize
  },
  description: {
    type: String
  },
  sets: [set]
}, {
  timestamps: true
})

module.exports = exerciseSchema
