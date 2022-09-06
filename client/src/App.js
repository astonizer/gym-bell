import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";

import { loadUser } from "./redux/actions/authActions";
import "./App.css";

import Home from "./pages/Home/Home";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Box
        className="App"
        width="400px"
        sx={{ width: { xl: "1488px" } }}
        m="auto"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/login" element={<Login navigate={navigate} />} />
          <Route path="/register" element={<Register navigate={navigate} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
