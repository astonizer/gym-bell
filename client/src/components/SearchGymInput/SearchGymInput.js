import React, { useState } from "react";
import { Button, IconButton, InputBase, Paper, Stack } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";

function SearchGymInput({ navigate }) {
  const [locationName, setLocationName] = useState("");

  function handleClick(e) {
    e.preventDefault();
    navigate("/gym");
  }

  return (
    <Stack direction="row">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter Location Name"
          inputProps={{ "aria-label": "search gym" }}
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <MyLocationIcon />
        </IconButton>
      </Paper>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        onClick={handleClick}
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Gyms
      </Button>
    </Stack>
  );
}

export default SearchGymInput;
