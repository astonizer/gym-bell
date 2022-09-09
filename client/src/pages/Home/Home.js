import React from "react";
import { Box } from "@mui/material";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import FindTrainer from "../../components/FindTrainer/FindTrainer";
import WhyUs from "../../components/WhyUs/WhyUs";

function Home() {
  return (
    <Box className="home">
      <HeroBanner />
      <WhyUs />
      <FindTrainer />
    </Box>
  );
}

export default Home;
