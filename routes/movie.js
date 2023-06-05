const express = require("express");
const router = express.Router();
const movieRatingsModel = require("../models/movie");

const {
  getAllMovieRatings,
  createNewMovie,
  getMovie,
  getMovieRating,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.js");

router.route("/").get(getAllMovieRatings);
router.route("/").post(createNewMovie);

router.route("/:id").get(getMovie, getMovieRating);
router.route("/:id").patch(getMovie, updateMovie);
router.route("/:id").delete(getMovie, deleteMovie);

module.exports = router;
