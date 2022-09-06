import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/actions/errorActions";
import { registerUser } from "../../redux/actions/authActions";

import { Alert } from "@mui/material";

function Register({ navigate }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.message);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const userDetails = useSelector((state) => state.auth.userDetails);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearErrors());
    if (isAuthenticated) {
      alert("You are registered");
      navigate("/");
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
    dispatch(registerUser(user));
    setUser({
      username: "",
      email: "",
      password: "",
      role: "",
    });
  }
  return (
    <form className="register" onSubmit={handleSubmit}>
      <h3>Register</h3>

      <label>Username:</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={user.username}
      />
      <br />
      <label>Email address:</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
      />
      <br />
      <label>Trainer:</label>
      <input type="radio" name="role" onChange={handleChange} value="TRAINER" />
      <br />
      <label>Trainee:</label>
      <input type="radio" name="role" onChange={handleChange} value="TRAINEE" />
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

export default Register;
