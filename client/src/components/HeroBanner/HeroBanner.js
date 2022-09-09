import React from "react";
import { Box, Typography } from "@mui/material";

import Banner from "./Banner";
import "./Banner.css";
import SearchGymInput from "../SearchGymInput/SearchGymInput";

function HeroBanner({ navigate }) {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Box
        className="heroBanner"
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        position="relative"
        p="20px"
      >
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
          Fitness Network
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
          Become a part of this new fitness generation
        </Typography>
        <SearchGymInput navigate={navigate} />
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
