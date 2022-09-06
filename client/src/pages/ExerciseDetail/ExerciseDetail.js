import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchExerciseData, fetchYoutubeData } from "../../utils/fetchData";
import {
  EQUIPMENT_EXERCISES_LIST,
  EXERCISE_DETAIL,
  TARGET_MUSCLE_EXERCISES_LIST,
} from "../../urls/exercise";
import { YOUTUBE_SEARCH } from "../../urls/youtube";

import Detail from "../../components/Detail/Detail";
import ExerciseVideos from "../../components/ExerciseVideos/ExerciseVideos";
import SimilarExercises from "../../components/SimilarExercises/SimilarExercises";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchExerciseData(
        EXERCISE_DETAIL + `/${id}`
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchYoutubeData(
        YOUTUBE_SEARCH + `query=${exerciseDetail.name} exercise`
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchExerciseData(
        TARGET_MUSCLE_EXERCISES_LIST + `/${exerciseDetailData.target}`
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchExerciseData(
        EQUIPMENT_EXERCISES_LIST + `/${exerciseDetailData.equipment}`
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box className="exerciseDetail">
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
}

export default ExerciseDetail;
