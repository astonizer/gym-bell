import React from "react";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";

function WhyCard({ cardContent, id }) {
  function returnSvg(id) {
    switch (id) {
      case 0:
        return (
          <AirplaneTicketIcon fontSize="large" style={{ color: "#FF2625" }} />
        );
      case 1:
        return (
          <TravelExploreIcon fontSize="large" style={{ color: "#FF2625" }} />
        );
      case 2:
        return (
          <SportsMartialArtsIcon
            fontSize="large"
            style={{ color: "#FF2625" }}
          />
        );
      default:
        break;
    }
  }
  return (
    <Grid
      xs={12}
      md={4}
      sx={{
        mb: {
          md: "0px",
          xs: "24px",
        },
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Card
            sx={{
              width: {
                lg: 345,
                md: 250,
                sm: 580,
                xs: 350,
              },
              height: {
                md: 200,
                sm: 150,
              },
              borderRadius: "20px",
              boxShadow: 4,
            }}
          >
            <CardContent>
              <Stack
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                {returnSvg(id)}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#FF2625"
                >
                  {cardContent.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: {
                      lg: 2,
                      md: 0.7,
                    },
                  }}
                >
                  {cardContent.body}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WhyCard;
