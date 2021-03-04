const mongoose = require('mongoose')
const {allLowerCase, capitalize} = require('../../lib/util')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    set: allLowerCase
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String,
  name: {
    type: String,
    set: capitalize
  },
  surname: {
    type: String,
    set: capitalize
  },
  age: {
    type: Number,
    min: 16
  },
  experience: {
    type: String,
    enum: ['Pro', 'Experienced', 'Amateur', 'Rookie', '']
  }
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('User', userSchema)
