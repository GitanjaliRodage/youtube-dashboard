import "./VideoCard.css";
import { Link } from "react-router-dom";

function VideoCard({ video }) {

  return (
    <Link 
      to={`/video/${video.id}`} 
      className="video-link"
    >

      <div className="video-card">

        <img
          className="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />

        <div className="video-info">

          <img
            className="channel-logo"
            src={
              video.snippet.thumbnails.default.url
            }
            alt="channel"
          />

          <div className="video-details">

            <h4>
              {video.snippet.title}
            </h4>

            <p>
              {video.snippet.channelTitle}
            </p>

            <p>
              {video.statistics?.viewCount || 0} views
            </p>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default VideoCard;