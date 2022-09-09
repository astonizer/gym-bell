import React from "react";
import { Box, Grid, Stack } from "@mui/material";

function Stats() {
  return (
    <Box className="heroBanner" pt="100px" pb="80px">
      <Stack
        width="400px"
        sx={{ width: { xl: "1488px" } }}
        m="auto"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Grid container>
          <Grid item xs={4}>
            <Grid container justifyContent="flex-end">
              Loading..
            </Grid>
          </Grid>
          <Grid item xs={4}>
            Loading..
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="flex-start">
              Loading..
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Stats;
