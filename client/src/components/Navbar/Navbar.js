import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";

import { logoutUser } from "../../redux/actions/authActions";
import Logo from "../../assets/images/Logo.png";
import "./Navbar.css";

function Navbar({ navigate }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  function handleLogout() {
    dispatch(logoutUser());
    alert("You have logged out");
    navigate("/");
  }

  function scrollToExercises() {
    document.getElementById("exercises").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Stack
      className="navbar"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        p: { sm: "15px", xs: "22px" },
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="navbar-logo" />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className="navbar-link navbar-link-active">
          Home
        </Link>
        <Link
          to="#exercises"
          className="navbar-link"
          onClick={scrollToExercises}
        >
          Exercises{" "}
        </Link>
        {isAuthenticated ? (
          <Link to="#" className="navbar-link" onClick={handleLogout}>
            Logout{" "}
          </Link>
        ) : (
          <>
            <Link to="/register" className="navbar-link">
              Register{" "}
            </Link>
            <Link to="/login" className="navbar-link">
              Login{" "}
            </Link>
          </>
        )}
      </Stack>
    </Stack>
  );
}

export default Navbar;
