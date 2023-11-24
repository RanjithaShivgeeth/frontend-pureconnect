import OrbsHeader from "../../components/OrbsHeader/OrbsHeader";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Icons/publish.svg";
import "../UploadOrbsPage/UploadOrbsPage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

function UploadOrbsPage() {
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/videos`, {
        title: event.target.title.value,
        description: event.target.description.value,

        channel: "guest user",
        image: "./images/image0.jpeg",

        views: "0",
        likes: "0",
        duration: "4:20",
        // video: "",
        timestamp: Date.now(),
        comments: [],
      });
      alert("video uploaded");
      Navigate("/");
    } catch (err) {
      alert("not submitted");
    }
  };
  return (
    <>
      <div className="backgroundcolor">
        <div className="headerbackcolor">
          <OrbsHeader />
        </div>

        <h2 className="Upload__header">Upload Orbs</h2>
        <div className="Uploadimage">
          <div className="Upload">
            <p className="Upload__title">ORBS THUMBNAIL</p>
            <img className="Upload__photo" src={thumbnail} alt="photo" />
          </div>
          <div className="Upload__section">
            <form onSubmit={handleSubmit} action="">
              <label className="Upload__section1" htmlFor="">
                TITLE YOUR ORBS
              </label>
              <br />
              <input
                className="Upload__title"
                type="text"
                name="title"
                placeholder="Add a title to your orbs"
              />
              <br />
              <label className="Upload__section2">
                ADD A ORBS DESCRIBTION{" "}
              </label>
              <br />
              <textarea
                className="Upload__describtion"
                type="text"
                name="describtion"
                placeholder="Add a describtion to your orbs"
              />
              <div className="Upload__section3">
                <a className="Upload__cancel" href="/">
                  CANCEL
                </a>
                <button className="Upload__btn" type="submit">
                  <img
                    className="Upload__btn--icon"
                    src={publish}
                    alt="publish-icon"
                  />
                  PUBLISH
                </button>
                <a href="/" className="cancelButton">
                  CANCEL
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadOrbsPage;
