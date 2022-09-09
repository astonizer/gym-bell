import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Owner from "./Owner";

function AddGym({ navigate }) {
  function handleClick(e) {
    e.preventDefault();
    navigate("/gym/add");
  }

  return (
    <Stack
      className="addGym"
      backgroundColor="#FFE3E4"
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
        <Grid item lg={8} md={12}>
          <Stack justifyContent="center" alignItems="center" textAlign="center">
            <Typography variant="h2">Gym Owner?</Typography>
            <Typography variant="h5" m="40px">
              List your gym for FREE and benefit from <br />
              our marketing, reaching a wider audience.
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleClick}
              sx={{ backgroundColor: "#ff2625", padding: "10px" }}
            >
              <Typography variant="h5" mx="20px">
                List Your Gym Today
              </Typography>
            </Button>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Owner />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default AddGym;
