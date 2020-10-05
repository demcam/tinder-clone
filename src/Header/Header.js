import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { Link, useHistory } from "react-router-dom";

import "./Header.css";

export default function Header({ backButton }) {
  const history = useHistory();

  return (
    // BEM practice. Having a main component such as 'header' and everything involved with the header has a '__'. ex 'header__icon

    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <AccountCircleIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
          srcset=""
        />
      </Link>

      <Link to="/messages">
        <IconButton>
          <ChatIcon fontSize="Large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}
