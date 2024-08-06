// import { useState } from "react";
import { deleteAccount } from "../../utils/usersFetch";
import { useNavigate } from "react-router-dom";

const DeleteAccount = ({ logOrSignSetters }) => {
  // const [userId, setUserId] = useState("");
  // const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const data = await deleteAccount(logOrSignSetters.loggedUser.id);

      if (data.message === "User deleted successfully") {
        logOrSignSetters.setLoggedUser(null);
        logOrSignSetters.setIsLoggedIn(false);

        setTimeout(() => {
          navigate("/signup");
        }, 2000);
      } else {
        setMessage(" an error occured:", error.message);
      }
    } catch (error) {
      setMessage("Error" + error.message);
    }
  };

  return (
    <div>
      <h1>Delete Account</h1>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};
export default DeleteAccount;
