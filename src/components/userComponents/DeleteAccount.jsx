import { useState } from "react";
import { deleteAccount } from "../../utils/usersFetch";

const DeleteAccount = ({ logOrSignSetters }) => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      const data = await deleteAccount(userId);
      if (data.message === "User deleted successfully") {
        logOrSignSetters.setLoggedUser(null);
        logOrSignSetters.setIsLoggedIn(false);
        setMessage("User deleted successfully");
      } else {
        setMessage(" an error occured:" + error.message);
      }
    } catch (error) {
      setMessage("Error" + error.message);
    }
  };

  return (
    <div>
      <h1>Delete Account</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Account</button>
      {message && <p>{message}</p>}
    </div>
  );
};
export default DeleteAccount;
