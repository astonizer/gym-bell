import React, { forwardRef, useState } from "react";
import { Snackbar, Stack, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import SubscribeButton from "../SubscribeButton/SubscribeButton";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function StayUpdated() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p="20px"
      mt="110px"
    >
      <Typography variant="h3">Stay Updated</Typography>
      <Typography variant="h5" m="40px">
        Sign up to get a regular dose of fitness news, updates and exclusive
        offers.
      </Typography>
      <SubscribeButton handleClick={handleClick} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Successfully subscribed to Gym Bell's newsletter.
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default StayUpdated;
