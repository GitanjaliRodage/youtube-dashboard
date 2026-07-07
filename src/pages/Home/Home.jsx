import { useEffect, useState } from "react";
import "./Home.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import { fetchTrendingVideos } from "../../services/youtubeApi";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchTrendingVideos();
      setVideos(data);
      setLoading(false);
    };

    loadVideos();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="home">
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Home;