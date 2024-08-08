import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ logOrSignSetters }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logOrSignSetters.setLoggedUser(null);
      logOrSignSetters.setIsLoggedIn(false);
      document.cookie = 'jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      navigate("/login");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
