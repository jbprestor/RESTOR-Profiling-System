import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as OnePieceLogo } from "../../../assets/one-piece-logo-75.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <OnePieceLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/familylist">
            Family List
          </Link>
          <Link className="nav-links" to="/authentication">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
