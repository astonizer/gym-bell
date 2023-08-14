import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadUser } from "./redux/actions/authActions";
import "./App.css";

import Home from "./pages/Home/Home";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ExerciseWiki from "./pages/ExerciseWiki/ExerciseWiki";
import GymList from "./pages/GymList/GymList";
import GymDetail from "./pages/GymDetail/GymDetail";
import PassList from "./pages/PassList/PassList";
import FindTrainer from "./pages/FindTrainer/FindTrainer";
import TrainerDetail from "./pages/TrainerDetail/TrainerDetail";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/login" element={<Login navigate={navigate} />} />
        <Route path="/register" element={<Register navigate={navigate} />} />
        <Route path="/exercise" element={<ExerciseWiki />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/gym" element={<GymDetail />} />
        <Route path="/gym/add" element={<GymList />} />
        <Route path="/pass" element={<PassList />} />
        <Route path="/trainer" element={<FindTrainer />} />
        <Route path="/trainer/:id" element={<TrainerDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
