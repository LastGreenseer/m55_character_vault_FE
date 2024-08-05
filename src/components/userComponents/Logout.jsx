import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ logOrSignSetters }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logOrSignSetters.setLoggedUser(null);
      logOrSignSetters.setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
