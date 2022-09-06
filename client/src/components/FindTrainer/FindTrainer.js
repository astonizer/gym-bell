import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import PersonalTrainer from "./PersonalTrainer";

function FindTrainer() {
  return (
    <Stack direction="row" alignItems="center" className="searchExercises">
      <PersonalTrainer />
      <Box>
        <Typography variant="h5">
          Need a trainer to monitor your workouts?
        </Typography>
      </Box>
    </Stack>
  );
}

export default FindTrainer;
