import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/footer/footer";
import "../HomePage/HomePage.scss";
import { Link } from "react-router-dom";
import plant from "../../assets/Images/plants.jpg";
import wholegrain from "../../assets/Images/whole-grain.jpg";
import vegetables from "../../assets/Images/vegetables.jpg";
import seeds from "../../assets/Images/seeds.jpg";
import timber from "../../assets/Images/timber-lumber.jpg";
import fruits from "../../assets/Images/fruits.jpg";
import organic from "../../assets/Images/pureconnect_organic.webp";
import conventional from "../../assets/Images/pureconnect_conventional.png";

function HomePage() {
  return (
    <>
      <div className="backgroundcolor">
        <HeaderNav />
        <div className="herobanner">
          <h1>Bridging Farms to Homes</h1>

          <h2>
            Discover the Bounty of Local, Organic Produce, Straight from the
            Source
          </h2>

          <h3>
            {" "}
            Empowering Sustainable Agriculture, One Direct Connection at a Time
          </h3>
        </div>

        <div className="herobanner__divider"></div>

        <div className="herobaner">
          <h2 className="herobaner__heading">Top Categories</h2>
        </div>

        <div className="herobaner__imagesection">
          <img
            className="herobaner__images"
            src={wholegrain}
            alt="Categories"
          />
          <img
            className="herobaner__images"
            src={vegetables}
            alt=" Categories"
          />
          <img className="herobaner__images" src={seeds} alt=" Categories" />
          <img className="herobaner__images" src={plant} alt=" Categories" />
          <img className="herobaner__images" src={timber} alt=" Categories" />
          <img className="herobaner__images" src={fruits} alt=" Categories" />
        </div>
        <div className="herobanner__divider2"></div>

        <div className="herosection">
          <h2 className="herosection__heading">Organic Orbs</h2>
          <h2 className="herosection__heading">Conventional Orbs</h2>
        </div>

        <div className="herosection__category">
          <img className="herosection__images" src={organic} alt="Categories" />
          <button className="herosection__btn" type="submit">
            SHOP NOW
          </button>
          <img
            className="herosection__images"
            src={conventional}
            alt="Categories"
          />
          <button className="herosection__btn1" type="submit">
            SHOP NOW
          </button>
        </div>
        <div className="herobanner__divider3"></div>

        <Footer />
      </div>
    </>
  );
}
export default HomePage;
