import React, { useState } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter({ stat }) {
  const [wasVisible, setWasVisible] = useState(false);

  function displayDefault() {
    if (!wasVisible) return 0;
    return stat.cnt + (wasVisible && "+");
  }

  function displayCount() {
    return (
      <>
        <CountUp
          end={stat.cnt}
          duration="3"
          useEasing="true"
          onEnd={() => setWasVisible(true)}
        />
        +
      </>
    );
  }

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        my: {
          md: "0px",
          xs: "9px",
        },
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Paper
          component={Stack}
          direction="column"
          justifyContent="center"
          sx={{
            width: {
              xs: 150,
              sm: 200,
            },
            height: {
              xs: 150,
              sm: 200,
            },
            backgroundColor: "#ff2625",
            "&:hover": {
              boxShadow: 13,
            },
            borderRadius: "50%",
          }}
        >
          <Typography variant="h3" color="#fff" fontWeight="bold">
            <VisibilitySensor partialVisibility offset={{ bottom: 300 }}>
              {({ isVisible }) => (
                <div style={{ height: 70 }}>
                  {isVisible && !wasVisible ? displayCount() : displayDefault()}
                </div>
              )}
            </VisibilitySensor>
          </Typography>
          <Typography variant="h6" color="#fff">
            {stat.desc}
          </Typography>
        </Paper>
      </Stack>
    </Grid>
  );
}

export default Counter;
