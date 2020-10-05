import React from "react";

import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

function SingleMessage({ name, message, timestamp, profilePic }) {
  const displayedMessage =
    name === "Zendaya Coleman" ? (
      <Link to={`messages/${name}`}>
        <div className="message">
          <Avatar className="message__avatar" alt={name} src={profilePic} />
          <div className="message__details">
            <h3>{name}</h3>
            <p>{message}</p>
          </div>
          <p className="message__timestamp">{timestamp}</p>
        </div>
      </Link>
    ) : (
      <Link to={`#`}>
        <div className="message">
          <Avatar className="message__avatar" alt={name} src={profilePic} />
          <div className="message__details">
            <h3>{name}</h3>
            <p>{message}</p>
          </div>
          <p className="message__timestamp">{timestamp}</p>
        </div>
      </Link>
    );

  return displayedMessage;
}

export default SingleMessage;
