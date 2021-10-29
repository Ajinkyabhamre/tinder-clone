import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import tinder from "./tinder.png";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icons" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icons" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img className="header__logo" src={tinder} alt="tinder logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icons" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
