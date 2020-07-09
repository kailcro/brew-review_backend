const mongoose = require('mongoose')
const reviewSchema = require('./review')
// add .schema to the end of line 2 if having errors
const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  brewery: {
    type: String,
    required: true
  },
  abv: {
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Beer', beerSchema)
