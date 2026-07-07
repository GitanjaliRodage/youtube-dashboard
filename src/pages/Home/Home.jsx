import "./Home.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import videos from "../../data/videos";

function Home() {
  return (
    <div className="home">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
}

export default Home;