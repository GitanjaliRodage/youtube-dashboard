import "./VideoCard.css";

function VideoCard({ video }) {
  return (
    <div className="video-card">

      <img
        className="thumbnail"
        src={video.thumbnail}
        alt={video.title}
      />

      <div className="video-info">

        <img
          className="channel-logo"
          src={video.channelLogo}
          alt={video.channel}
        />

        <div className="video-details">

          <h4>{video.title}</h4>

          <p>{video.channel}</p>

          <p>
            {video.views} • {video.time}
          </p>

        </div>

      </div>

    </div>
  );
}

export default VideoCard;