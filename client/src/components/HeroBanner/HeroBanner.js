import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Banner from "./Banner";
import "./Banner.css";

function HeroBanner() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Box
        className="heroBanner"
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        position="relative"
        p="20px"
      >
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography
          mb="23px"
          mt="30px"
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" mb={4} lineHeight="35px">
          Check out the most effective exercises
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        >
          Explore Exercises
        </Button>
        <Typography
          fontSize="200px"
          fontWeight={600}
          color="#ff2625"
          sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        >
          Exercise
        </Typography>
        <Banner />
      </Box>
    </Box>
  );
}

export default HeroBanner;
