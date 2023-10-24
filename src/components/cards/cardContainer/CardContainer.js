import React from "react";
import Card from "../card/Card";

const CardContainer = () => {
  const fakeUsers = ["bill", "jane", "fred", "sarah", "bob", "alice"];
  console.log(fakeUsers);
  return (
    <div className="card-container">
      {fakeUsers.map((user, index) => (
        <Card user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
