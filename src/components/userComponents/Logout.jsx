import { useState } from "react";
import { useHistory } from "react-router-dom";

const Logout = ({ logOrSignSetters }) => {
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleLogout = () => {
    try {
      logOrSignSetters.setLoggedUser(null);
      logOrSignSetters.setIsLoggedIn(false);
      setMessage("Logged out successfully");
      history.push("/login");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Logout;
