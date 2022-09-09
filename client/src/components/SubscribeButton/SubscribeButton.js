import React, { useState } from "react";
import { Button, InputBase, Paper, Stack } from "@mui/material";

function SearchGymInput({ handleClick }) {
  const [email, setEmail] = useState("");

  return (
    <Stack direction="row" mb="40px">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: {
            md: 400,
            s: 150,
          },
          boxShadow: 6,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter Email"
          inputProps={{ "aria-label": "set email" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Paper>
      <Button
        variant="contained"
        color="error"
        onClick={handleClick}
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Subscribe
      </Button>
    </Stack>
  );
}

export default SearchGymInput;
