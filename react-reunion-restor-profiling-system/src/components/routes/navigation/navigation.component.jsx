import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as OnePieceLogo } from "../../../assets/one-piece-logo-75.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../../firebase/firebase.utils";
import "./navigation.styles.scss";



const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  
  }
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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-links" to="/authentication">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
