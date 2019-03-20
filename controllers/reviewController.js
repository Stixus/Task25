const Review = require("../models").Review;
module.exports = {
  create(req, res) {
    return Review.create({
      rating: req.body.rating,
      review: req.body.reviewText,
      userId: req.body.user_id,
      restaurantId: req.body.restaurant_id
    })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Review.update(
      {
        rating: req.body.rating,
        review: req.body.review,
        userId: req.body.user_id,
        restaurantId: req.body.restaurant_id
      },
      {
        where: {
          id: req.body.review_id
        }
      }
    )
      .then(review => res.status(200).send(review))
      .catch(error => res.status(400).send(error));
  },

  get(req, res) {
    return Review.findOne({
      rating: req.body.rating,
      review: req.body.review,
      userId: req.body.user_id,
      restaurantId: req.body.restaurant_id,

      order: [["updatedAt", "DESC"]]
    })
      .then(review => res.status(200).send(review))
      .catch(error => res.status(400).send(error));
  },

  getReviewByRestaurantId(req, res) {
    return Review.findAll(
      {
        where: {
          restaurantId: req.param("restaurant_id")
        }
      },
      {
        rating: req.body.rating,
        review: req.body.review,
        userId: req.body.user_id,
        restaurantId: req.body.restaurant_id
      }
    )
      .then(review => res.status(200).send(review))
      .catch(error => res.status(400).send(error));
  }
};
