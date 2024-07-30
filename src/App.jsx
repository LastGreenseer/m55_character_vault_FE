import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./components/Login";

import AddChar from "./components/AddCharacter";

function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <p>{import.meta.env.VITE_TEST}</p>
      <p>Ryan's cool test</p>
      <Login />
      <AddChar />
      <Footer />
    </>
  );
}

export default App;
