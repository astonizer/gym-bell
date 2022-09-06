import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import Exercises from "../../components/Exercises/Exercises";
import FindTrainer from "../../components/FindTrainer/FindTrainer";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box className="home">
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
      <FindTrainer />
    </Box>
  );
}

export default Home;
