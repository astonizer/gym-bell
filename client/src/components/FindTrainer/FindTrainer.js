import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import PersonalTrainer from "./PersonalTrainer";

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
        <Grid item md={4}>
          <PersonalTrainer />
        </Grid>
        <Grid item lg={8} md={12}>
          <Stack justifyContent="center" alignItems="center" textAlign="center">
            <Typography variant="h2">Hire A Trainer</Typography>
            <Typography variant="h5" m="40px">
              Do you think your workouts are not effective? <br />
              Do you need a trainer to monitor your workouts?
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleClick}
              sx={{ backgroundColor: "#ff2625", padding: "10px" }}
            >
              <Typography variant="h5" mx="20px">
                Hire A Trainer
              </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default FindTrainer;
