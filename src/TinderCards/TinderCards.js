import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

import database from "../firebase";

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection("users")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="tinderCards"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="single_card infoBox"
              style={{
                backgroundImage: `url(${person.image})`,
              }}
            >
              <h1 className="tinderCards__info">
                {person.name}, &nbsp;{person.age}
              </h1>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
