import React from "react";
import { CircularProgress, Stack } from "@mui/material";

function Loader() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <CircularProgress color="error" />
    </Stack>
  );
}

export default Loader;
