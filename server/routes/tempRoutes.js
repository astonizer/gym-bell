require("dotenv").config();
const express = require("express");
const axios = require("axios");
const Exercise = require("../models/Exercise");

const router = express.Router();

/**
 *
 * @access Public
 * @description Register new user
 *
 */

router.get("/pushAllExercises", (req, res) => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      response.data.map((exercise) => {
        Exercise.create(exercise);
        console.log(exercise.id);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
  res.status(201);
  res.end();
});

module.exports = router;
