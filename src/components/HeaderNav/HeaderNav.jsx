import "./HeaderNav.scss";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/Logo/InStock-Logo_2x.png";

function HeaderNav() {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1 className="header__logo">PureConnect</h1>
      </Link>
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
    </header>
  );
}

export default HeaderNav;
