import axios from "axios";

const exerciseHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

const youtubeHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
};

export const fetchExerciseData = async (url) => {
  const config = {
    method: "GET",
    url,
    headers: exerciseHeaders,
  };
  const response = await axios.request(config);
  return response.data;
};

export const fetchYoutubeData = async (url) => {
  const config = {
    method: "GET",
    url,
    headers: youtubeHeaders,
  };
  const response = await axios.request(config);
  return response.data;
};
