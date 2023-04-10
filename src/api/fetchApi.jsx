import axios from "axios";

export const fetchApi = async (category) => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=db51d6e6408d4898864c708c73793cc7`
  );
  return data;
};
