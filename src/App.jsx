import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AddChar from "./components/AddCharacter";
import UpdateProfile from "./components/UpdateProfile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const logOrSignSetters = {
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
  };
  return (
    <>
      <Header loggedUser={loggedUser} />
      <h1>Character Vault</h1>
      <p>{import.meta.env.VITE_TEST}</p>
      <Login logOrSignSetters={logOrSignSetters} />
      <UpdateProfile loggedUser={loggedUser} />
      <AddChar />
      <Footer />
    </>
  );
};

export default App;
