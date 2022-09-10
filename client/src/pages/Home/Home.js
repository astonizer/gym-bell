import React from "react";
import { Box } from "@mui/material";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import FindTrainer from "../../components/FindTrainer/FindTrainer";
import WhyUs from "../../components/WhyUs/WhyUs";
import ExploreExercises from "../../components/ExploreExercises/ExploreExercises";
import AddGym from "../../components/AddGym/AddGym";
import StayUpdated from "../../components/StayUpdated/StayUpdated";
import Stats from "../../components/Stats/Stats";

function Home({ navigate }) {
  return (
    <Box className="home">
      <HeroBanner navigate={navigate} />
      <WhyUs navigate={navigate} />
      <Stats />
      <ExploreExercises navigate={navigate} />
      <FindTrainer navigate={navigate} />
      <AddGym navigate={navigate} />
      <StayUpdated />
    </Box>
  );
}

export default Home;
