import React from "react";
import "./Header.css";

const Header = ({ user }) => {
  if (!user.token) {
    return <h1>Not logged in</h1>;
  }

  return (
    <div>
      <h1>
        <p class="greyBG">
          <strong>Hi {user.name}, You are logged in to My App</strong>
        </p>
      </h1>
    </div>
  );
};

export default Header;
