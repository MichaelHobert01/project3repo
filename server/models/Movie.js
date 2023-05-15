const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  rating: [
    {
      ratingText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 7,
        trim: true,
      },
    },
  ],

  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
