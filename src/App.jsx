import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./pages/Signup";
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
      <Router>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login logOrSignSetters={logOrSignSetters} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />} />
          <Route
            path="/"
            element={isLoggedIn ? <Home user={loggedUser} /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </Router>
      {/* <Header loggedUser={loggedUser} />
      <h1>Character Vault</h1>
      <p>{import.meta.env.VITE_TEST}</p>
      <Login logOrSignSetters={logOrSignSetters} />
      <UpdateProfile loggedUser={loggedUser} />
      <AddChar />
      <Footer /> */}
    </>
  );
};

export default App;
