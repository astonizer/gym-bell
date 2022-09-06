import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "../Loader/Loader";

function ExerciseVideos({ exerciseVideos, name }) {
  return (
    <Box
      sx={{
        marginTop: {
          lg: "200px",
          xs: "20px",
        },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos.length ? (
          exerciseVideos?.slice(0, 3).map((item, id) => (
            <a
              key={id}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant="h6" color="#585858">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
