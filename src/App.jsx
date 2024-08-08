import React, { useState, useEffect } from "react";
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
import AddChar from "./pages/AddCharacter";
import UpdateChar from "./pages/UpdateCharacter";
import CharacterInfo from "./pages/CharacterInfo";

import { getTokenFromCookie } from "./common";
import { fetchCharactersWithUserId } from "./utils/charFetch";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userCharacters, setUserCharacters] = useState([]);

  const logOrSignSetters = {
    userCharacters,
    setUserCharacters,
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = getTokenFromCookie('jwt_token');
      if (token) {
        try {
          const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/verify-token`, {
            method: "GET",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          
          if (!response.ok) {
            throw new Error(`Token verification failed: ${response.status}`);
          }
  
          const data = await response.json();
  
          if (data.user) {
            setIsLoggedIn(true);
            setLoggedUser(data.user);
            
            const characters = await fetchCharactersWithUserId(data.user.id);
            setUserCharacters(characters);
          } else {
            console.log("User not found with that id");
          }
        } catch (error) {
          console.error('Token verification or character fetch failed:', error);
          document.cookie = 'jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          setLoggedUser(null);
          setUserCharacters([]);
        }
      } else {
        setLoggedUser(null);
        setUserCharacters([]);
      }
      setLoading(false);
    };
  
    verifyToken();
  }, []);

  return (
    <>
      <Router>
        <Header loggedUser={loggedUser} logOrSignSetters={logOrSignSetters} />
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
                <Home user={loggedUser} userCharacters={userCharacters} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile
                  loggedUser={loggedUser}
                  logOrSignSetters={logOrSignSetters}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/add-character"
            element={
              isLoggedIn ? (
                <AddChar loggedUser={loggedUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/update-character"
            // element={
            //   isLoggedIn ? <UpdateChar /> : <Navigate to="/login" replace />
            // }
            element={<UpdateChar />}
          />
          <Route path="/character-info/:id" element={<CharacterInfo />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
