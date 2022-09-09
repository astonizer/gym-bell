import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import ExploringPerson from "./ExploringPerson";

function FindTrainer({ navigate }) {
  function handleClick(e) {
    e.preventDefault();
    navigate("/trainer");
  }

  return (
    <Stack
      className="addGym"
      direction="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      backgroundColor="#FFE3E4"
      sx={{
        minHeight: {
          xs: "500px",
          md: "400px",
        },
      }}
    >
      <Grid
        container
        width="400px"
        sx={{ width: { xl: "1488px" } }}
        m="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={8} md={12}>
          <Stack justifyContent="center" alignItems="center" textAlign="center">
            <Typography variant="h2">Explore Exercises</Typography>
            <Typography variant="h5" m="40px">
              Browse over more than 1300 exercises.
              <br />
              Find exercises related by muscle or equipment.
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleClick}
              sx={{ backgroundColor: "#ff2625", padding: "10px" }}
            >
              <Typography variant="h5" mx="20px">
                Browse Now
              </Typography>
            </Button>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <ExploringPerson />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default FindTrainer;
