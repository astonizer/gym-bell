import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import WhyCard from "./WhyCard/WhyCard";

function WhyUs() {
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
      </Stack>
    </Box>
  );
}

export default WhyUs;
