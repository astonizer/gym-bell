import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/actions/errorActions";
import { loginUser } from "../../redux/actions/authActions";

import { Alert } from "@mui/material";

function Login({ navigate }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.message);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const userDetails = useSelector((state) => state.auth.userDetails);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(clearErrors());
    if (isAuthenticated) {
      alert("You are now logged in.");
      navigate("/profile");
    }
  }, [isAuthenticated, navigate, dispatch]);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(user));
    setUser({
      email: "",
      password: "",
    });
  }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={user.email}
        required
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
        required
      />
      <br />

      <input type="submit" value="Submit" />
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
    </form>
  );
}

export default Login;
