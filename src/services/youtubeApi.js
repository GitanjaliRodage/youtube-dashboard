import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchTrendingVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        chart: "mostPopular",
        maxResults: 20,
        regionCode: "IN",
        key: API_KEY,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("YouTube API Error:", error);
    return [];
  }
};