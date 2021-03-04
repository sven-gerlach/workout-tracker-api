const mongoose = require('mongoose')

const setSchema = new mongoose.Schema({
  weight: {
    type: Number,
    min: 0,
    required: true
  },
  repetitions: {
    type: Number,
    min: 0,
    required: true
  }
}, {
  timestamps: true
})

module.exports = setSchema
