import "../OrbsList/OrbsList.scss";
import { Link } from "react-router-dom";

function OrbsList({ videos, selectedVideos, setSelectedVideos }) {
  console.log(selectedVideos);
  console.log("videos:", videos);

  return (
    <>
      <div className="video__list">
        <div className="videos">
          <p className="videoTitle"> NEXT ORBS</p>
          <ul>
            {videos
              .filter((video) => video.id !== selectedVideos.id)
              .map((video) => {
                return (
                  <li
                    onClick={() => setSelectedVideos(video)}
                    className="videoTitle__list"
                    key={video.id}
                  >
                    <div className="videos__list">
                      <div>
                        <img
                          className="videos__image"
                          src={`http://localhost:8080/${video.image}`}
                          alt={video.title}
                        />
                      </div>
                      <div className="videos__nameTitle">
                        <h3 className="videos__nameTitle--head">
                          {video.title}
                        </h3>
                        <p className="videos__nameTitle--channel">
                          {video.channel}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default OrbsList;
