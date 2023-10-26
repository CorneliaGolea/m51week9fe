import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/cardContainer/CardContainer";
import { useState, useEffect } from "react";

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
  const [user, setUser] = useState({
    username: null,
    email: null,
    password: null,
  });

  return (
    <div className="App">
      <Header user={user} />
      <CardContainer user={user} />
      <UserContainer user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;
