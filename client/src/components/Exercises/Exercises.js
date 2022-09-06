import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";

import { fetchExerciseData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import Loader from "../Loader/Loader";

import { BODY_PART, EXERCISES_LIST } from "../../urls/exercise";

function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexofFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexofFirstExercise,
    indexOfLastExercise
  );

  function paginate(e, value) {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behaivour: "smooth" });
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchExerciseData(EXERCISES_LIST);
      } else {
        exercisesData = await fetchExerciseData(BODY_PART + `/${bodyPart}`);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <Box
      className="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results for {capitalize(bodyPart)}
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises ? (
          currentExercises.map((exercise, id) => (
            <ExerciseCard key={id} exercise={exercise} />
          ))
        ) : (
          <Loader />
        )}
      </Stack>
      <Stack mt="100px" alignitem="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
