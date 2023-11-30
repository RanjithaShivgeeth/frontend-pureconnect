import "../OrbsHeader/OrbsHeader.scss";
import icons from "../../assets/Icons/search.svg";
import button from "../../assets/Icons/upload.svg";
import image from "../../assets/Images/Mohan-muruge.jpg";
import { NavLink } from "react-router-dom";

function OrbsHeader() {
  return (
    <>
      <div className="Web">
        <div className="Web__logo">
          <nav>
            <NavLink to="/">
              <h1 className="Web__logo--header">PureConnect</h1>
            </NavLink>
          </nav>
        </div>
        <div className="header__optionwrap">
          <NavLink className="header__option" to={"/warehouses"}>
            <div className="header__option">My Farm</div>
          </NavLink>
          <NavLink className="header__option" to={"/inventory"}>
            <div className="header__option">My Orbs</div>
          </NavLink>
          <NavLink className="header__option" to={"/Orbs"}>
            <div className="header__option">OrganicOrbs</div>
          </NavLink>
          <NavLink className="header__option" to={"/Orbs"}>
            <div className="header__option">ConventionalOrbs</div>
          </NavLink>
        </div>

        <div className="Web__searchBar">
          <div className="Web__searchBar--inputField">
            <input
              className="Web__searchBar--input"
              type="search"
              placeholder="Search"
              name="search"
              required
            />

            {/* <img src={icons} className="Web__searchBar--icons" alt="icons" /> */}
          </div>

          <button
            className="Web__searchBar--btn"
            src={button}
            alt="upload-button"
          >
            <nav>
              <NavLink to="/upload">UPLOAD</NavLink>
            </nav>
          </button>

          {/* <img className="Web__searchBar--image" src={image} alt="image" /> */}
        </div>

        <div className="Web__button">
          <button className="Web__uploadButton">UPLOAD</button>
          {/* <img
            className="Web__mobile--uploadButtonicon"
            src={button}
            alt="upload-icon"
          /> */}
        </div>
      </div>
    </>
  );
}
export default OrbsHeader;
