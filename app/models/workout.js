const mongoose = require('mongoose')
const exerciseSchema = require('./exercise')

// todo: removed start and end time from schema as this data should be stored in the time stamps
const workoutSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weightUnit: {
    type: String,
    enum: ['lb', 'kg'],
    required: true
  },
  exercise: [exerciseSchema]
}, {
  timestamps: true
})

// todo: add virtual to return date, time created, time updated

module.exports = mongoose.model('Workout', workoutSchema)
