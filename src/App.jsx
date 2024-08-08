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

const generateAvatarUrl = (name) => {
  return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(
    name
  )}`;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [userCharacters, setUserCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const temp = userCharacters.map((char) => {
      return { ...char, image: generateAvatarUrl(char.name) };
    });
    setCharacters([...temp]);
  }, [userCharacters]);

  const logOrSignSetters = {
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
  };

  const charSetters = {
    userCharacters,
    setUserCharacters,
    characters,
    setCharacters,
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = getTokenFromCookie("jwt_token");
      if (token) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/users/verify-token`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

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
          console.error("Token verification or character fetch failed:", error);
          document.cookie =
            "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
                <Login
                  logOrSignSetters={logOrSignSetters}
                  charSetters={charSetters}
                />
              )
            }
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />}
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home
                  user={loggedUser}
                  userCharacters={userCharacters}
                  charSetters={charSetters}
                  characters={characters}
                />
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
                <AddChar loggedUser={loggedUser} charSetters={charSetters} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/update-character"
            element={<UpdateChar setUserCharacters={setUserCharacters} />}
          />
          <Route
            path="/character-info/:id"
            element={<CharacterInfo setUserCharacters={setUserCharacters} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
