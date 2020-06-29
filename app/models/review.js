const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  recommend: {
    type: Boolean,
    required: true
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = reviewSchema

// Maybe add this into schema of review ?
// beer: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Beer',
//   required: true
// },
