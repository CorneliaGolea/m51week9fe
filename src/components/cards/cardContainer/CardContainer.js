import React from "react";
import Card from "../card/Card";
import "./CardContainer.css";

const CardContainer = ({ users }) => {
  const fakeUsers = ["bill", "jane", "fred", "sarah", "bob", "alice"];
  // console.log(fakeUsers);
  return (
    <div className="card-container">
      <div className="card-wrapper">
        {fakeUsers.map((user, index) => (
          <Card user={user} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
