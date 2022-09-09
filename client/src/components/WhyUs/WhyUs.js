import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import WhyCard from "./WhyCard/WhyCard";

function WhyUs({ navigate }) {
  const cardContentData = [
    {
      title: "Suitable Pass For You",
      body: "No documentation required. One pass is all you need.",
    },
    {
      title: "Gyms Everywhere",
      body: "With our large network, it's easy to find a gym near you",
    },
    {
      title: "Easy and flexible",
      body: "Start your journey easily online. Cancel anytime, you’re in control.",
    },
  ];

  function handleClick(e) {
    e.preventDefault();
    navigate("/pass");
  }

  return (
    <Box
      className="heroBanner"
      pt="100px"
      pb="80px"
      sx={{
        backgroundColor: "#FFE3E4",
      }}
    >
      <Stack
        width="400px"
        sx={{ width: { xl: "1488px" } }}
        m="auto"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h3" fontWeight="bold" mb="16px">
          How it works?
        </Typography>
        <Typography variant="h5" width="50vw" textAlign="center" mb="56px">
          We are a network of gyms all around the world. With our special pass,
          you can access fitness in any way you want at very affordable prices.
        </Typography>
        <Grid container>
          {cardContentData.map((cardContent, id) => (
            <WhyCard key={id} id={id} cardContent={cardContent} />
          ))}
        </Grid>
        <Button
          variant="contained"
          color="error"
          onClick={handleClick}
          sx={{
            backgroundColor: "#ff2625",
            p: "20px",
            mt: "43px",
            boxShadow: 6,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Explore All Passes
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}

export default WhyUs;
