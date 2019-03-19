const Review = require("../models").Review;
module.exports = {
  create(req, res) {
    return Review.create({
      rating: req.body.rating,
      review: req.body.review,
      userId: req.body.userId,
      restaurantId: req.body.restaurantId
    })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Review.update(
      {
        rating: req.body.rating,
        review: req.body.review,
        userId: req.body.userId,
        restaurantId: req.body.restaurantId
      },
      {
        where: {
          id: req.body.review_id
        }
      }
    )
      .then(review => res.status(200).send(review))
      .catch(error => res.status(400).send(error));
  }
};
