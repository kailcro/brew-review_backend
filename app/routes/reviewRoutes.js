const express = require('express')
const router = express.Router()
// keep the Restaurant model because review is within that
const Beer = require('../models/beer')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

// CREATE - post /reviews
router.post('/reviews', requireToken, (req, res, next) => {
// get the review data from the body of the request
// get the restaurant ID from the review data
// find the restaurant by it's ID
  req.body.review.reviewer = req.user.id
  const reviewData = req.body.review
  const beerId = reviewData.beerId
  Beer.findById(beerId)
    .then(beer => {
      // add the subdocument to parent document
      beer.reviews.push(reviewData)
      // save parent document
      return beer.save()
    })
  // send response back to client below
    .then(beer => res.json({beer: beer}))
    .catch(next)
})

// DESTROY - delete /reviews/:id
router.delete('/reviews/:id', (req, res, next) => {
  const id = req.params.id
  Beer.findOne({'reviews._id': id})
    .then(handle404)
    .then(beer => {
      beer.reviews.id(id).remove()
      return beer.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE - patch /reviews/:id
router.patch('/reviews/:id', (req, res, next) => {
  const id = req.params.id
  const reviewData = req.body.review
  Beer.findOne({
    'reviews._id': id
  })
    .then(handle404)
    .then(beer => {
      const review = beer.reviews.id(id)
      review.set(reviewData)
      return beer.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
