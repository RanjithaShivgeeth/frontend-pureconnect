import "../OrbsDisplay/OrbsDisplay.scss";
import likeicon from "../../assets/Icons/likes.svg";
import viewicon from "../../assets/Icons/views.svg";
import image from "../../assets/Images/Mohan-muruge.jpg";
import comment from "../../assets/Icons/add_comment.svg";

function OrbsDisplay({ selectedVideos }) {
  return (
    <>
      <div className="selectedvideoList">
        <div className="selectedvideoList__section">
          <h2 className="selectedvideoListHeading">{selectedVideos.title}</h2>
          <div className="videoplayer">
            <div className="videoplayer__detail">
              <p className="videoplayer__date">{selectedVideos.channel}</p>
              <p className="videoplayer__date--bydate">
                {selectedVideos.timestamp}
              </p>
            </div>

            <div className="video__Like">
              <p className="video__view">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${selectedVideos.views}`}
                  alt={selectedVideos.views}
                />
              </p>

              <p className="video__Like--like">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${selectedVideos.views}`}
                  alt={selectedVideos.likes}
                />
              </p>
            </div>
          </div>
          <p className="description">{selectedVideos.description}</p>
          <p className="comment">Reviews</p>
          <p className="heading">RATE & REVIEW</p>
          <form className="form" action="">
            <div className="form__section">
              <div className="form__innersection">
                <img
                  className="form__innersection--img"
                  src={image}
                  alt="image"
                />
              </div>

              <div className="form__section2">
                <textarea
                  className="form__section2--comment"
                  name="comment"
                  placeholder="Add a new review"
                ></textarea>

                <div className="form__section3">
                  <button className="form__section3--btn">REVIEW</button>
                  <img
                    className="form__section3--icon"
                    src={comment}
                    alt="comment-icon"
                  />
                </div>
              </div>
            </div>
          </form>
          {selectedVideos.comments?.map((comment) => (
            <div className="commentSection" key={comment.id}>
              <div className="commentSection__avatar"></div>
              <div className="commentSection__comments">
                <div className="commentSection__namedate">
                  <p>Name: {comment.name}</p>

                  <p> {comment.timestamp}</p>
                </div>
                <div>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}
export default OrbsDisplay;
