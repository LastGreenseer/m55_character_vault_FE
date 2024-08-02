import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

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
      <Router>
        <Header loggedUser={loggedUser} />
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login logOrSignSetters={logOrSignSetters} />
              )
            }
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />}
          />
          {/*  
            If page requires users to be logged in, run conditional check in element, first part is if user is logged in
            second part is if they aren't logged in, in the case below navigate to the login page 
          */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home user={loggedUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile loggedUser={loggedUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
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
