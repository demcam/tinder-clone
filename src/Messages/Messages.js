import React from "react";

import SingleMessage from "./SingleMessage";

import "./Messages.css";

function Messages() {
  return (
    <div>
      <div className="messages">
        <SingleMessage
          name="Zendaya Coleman"
          message="Heyyyy"
          timestamp="15 minutes ago"
          profilePic="https://myhero.com/images/guest/g290937/hero112533/zendaya.jpg"
        />
      </div>
      <div className="messages__disabled">
        <SingleMessage
          name="Kobe Bryant"
          message="Lakers need you man."
          timestamp="Yesterday"
          profilePic="https://ca-times.brightspotcdn.com/dims4/default/aa03b65/2147483647/strip/true/crop/1704x1229+0+263/resize/840x606!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F86%2Fe6%2F3dc7a71549d39c96ae70c467936b%2Fla-photos-1staff-492202-sp-0211-kobe-special-section52-wjs.jpg"
          className="disabled_message"
        />
      </div>
      <div className="messages__disabled">
        <SingleMessage
          name="Kevin Durant"
          message="1v1?"
          timestamp="5 days ago"
          profilePic="https://static01.nyt.com/images/2019/06/30/sports/30durant-lead/merlin_157274013_a6c93595-004d-4cf5-a31e-8140c4a579a2-superJumbo.jpg"
          className="disabled_message"
        />
      </div>
      <div className="messages__disabled">
        <SingleMessage
          name="Michael Jordan"
          message="You're a hall of famer"
          timestamp="2 weeks ago"
          profilePic="https://www.nba.com/images/cms/2020-03/michael-jordan-iso-archive-blazers.jpg?cw=1045&w=1116&x=52&ch=588&h=744&y=136"
          className="disabled_message"
        />
      </div>
    </div>
  );
}

export default Messages;
