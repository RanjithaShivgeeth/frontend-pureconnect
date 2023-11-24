import HeaderNav from "../../components/HeaderNav/HeaderNav";
import OrbsHeader from "../../components/OrbsHeader/OrbsHeader";
import OrbsImage from "../../components/OrbsImage/OrbsImage";
import OrbsDisplay from "../../components/OrbsDisplay/OrbsDisplay";
import OrbsList from "../../components/OrbsList/OrbsList";
import Footer from "../../components/footer/footer";
import "../OrbsListingPage/OrbsListingPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const api_url = process.env.REACT_APP_API_URL;
console.log(api_url);

function OrbsListingPage() {
  const [videos, setvideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({});

  const params = useParams();
  console.log("params", params.id);
  const { id } = useParams();
  console.log("id ", id);

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get("http://localhost:8080/videos");
      setvideos(response.data);
      setSelectedVideos(response.data[0]);
      console.log("videos", response.data);
    };
    getVideos();
  }, []);

  useEffect(() => {
    console.log(`${api_url}/videos/${id}`);
    const getSelectedVideos = async () => {
      const response = await axios.get(`${api_url}/videos/${id}`);
      setSelectedVideos(response.data);
      console.log("video", response.data);
    };
    if (id) {
      getSelectedVideos();
    }
  }, [id]);
  return (
    <>
      <div className="backgroundcolor">
        {/* <HeaderNav /> */}

        <div className="mainsection">
          <div className="header">
            <div className="OrbsHeader">
              <OrbsHeader />
            </div>
          </div>
          <div className="herobanner__divider3"></div>
          <div className="videoImage">
            <OrbsImage selectedVideos={selectedVideos} />
          </div>
        </div>
        <div className="destopView">
          <div className="videoPlayer">
            <OrbsDisplay selectedVideos={selectedVideos} />
          </div>
          <div className="videoList">
            <OrbsList
              videos={videos}
              selectedVideos={selectedVideos}
              setSelectedVideos={setSelectedVideos}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default OrbsListingPage;
