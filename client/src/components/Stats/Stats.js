import React, { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Counter from "./Counter/Counter";

function Stats() {
  const [stats, setStats] = useState([
    {
      desc: "Gyms Listed",
      cnt: 200,
    },
    {
      desc: "Happy Clients",
      cnt: 7000,
    },
    {
      desc: "Hours Spent on Fitness",
      cnt: 15000,
    },
  ]);

  return (
    <Box className="heroBanner" pt="100px" pb="80px" id="stats">
      <Stack justifyContent="center" alignItems="center" textAlign="center">
        <Typography variant="h3" mb="63px">
          Achievements We're Proud Of
        </Typography>
        <Stack
          width="400px"
          sx={{ width: { lg: "65%", md: "80%" } }}
          m="auto"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid container>
            {stats.length &&
              stats.map((stat) => <Counter stat={stat} key={stat.desc} />)}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Stats;
