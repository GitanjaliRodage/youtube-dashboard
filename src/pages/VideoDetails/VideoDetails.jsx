import { useParams } from "react-router-dom";
import "./VideoDetails.css";

function VideoDetails() {

    const { videoId } = useParams();

    return (

        <div className="watch-page">

            <div className="video-player">

                <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube Video"
                    allowFullScreen
                ></iframe>

            </div>

            <div className="video-content">

                <h2>Video Title</h2>

                <p>1.5M views • 2 days ago</p>

                <hr />

                <h3>Channel Name</h3>

                <p>
                    Channel description will appear here.
                </p>

            </div>

        </div>

    );

}

export default VideoDetails;