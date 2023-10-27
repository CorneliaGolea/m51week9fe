import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/cardContainer/CardContainer";
import { useState, useEffect } from "react";
import { authCheck } from "./utils";
import { getTokenFromCookie } from "./common";

// function App() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     async function getAllUsers() {
//       const response = await fetch(`http://localhost:5001/users`);
//       const data = await response.json();
//       // console.log(data);
//       await setUsers(data.users);

//       // console.log(data.users);
//     }

//     getAllUsers();
//   }, []);
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: null,
    password: null,
    token: null,
  });

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser({
          username: null,
          email: null,
          token: null,
        });
      } else {
        loginInWithToken(token, setUser);
      }
    }
  }, []);

  const loginInWithToken = async (token, setUser) => {
    const persistantUser = await authCheck(token);
    console.log("app.js persistantuser:", persistantUser);
    await setUser(persistantUser);
  };

  return (
    <div className="App">
      <Header user={user} />
      <CardContainer user={user} users={users} />
      <UserContainer user={user} setUser={setUser} setUsers={setUsers} />
      <Footer />
    </div>
  );
}

export default App;
