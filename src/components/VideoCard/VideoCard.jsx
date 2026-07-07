import "./VideoCard.css";

function VideoCard() {
  return (
    <div className="video-card">

      <img
        className="thumbnail"
        src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        alt="thumbnail"
      />

      <div className="video-info">

        <img
          className="channel-logo"
          src="https://yt3.googleusercontent.com/ytc-placeholder=s88-c-k-c0x00ffffff-no-rj"
          alt="channel"
        />

        <div className="video-details">

          <h4>
            Learn React JS Complete Course
          </h4>

          <p>CodeWithHarry</p>

          <p>2.3M views • 3 months ago</p>

        </div>

      </div>

    </div>
  );
}

export default VideoCard;