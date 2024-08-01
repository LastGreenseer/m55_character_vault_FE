import { useState } from "react";
import { fetch } from ("../utils/fetch")

const DeleteAccount = ({userId}) => {
  const fakeUser = {
    username: "person",
  email:"email@email",
  password:"pass123",
  }
}

const [userId, setUserId] = useState("");
const [message, setMessage] = useState("");
  
const handleDelete = async () => {

    if (!userId) {
      setMessage('User ID is required');
      return;
    }
    try{
  
      const data = await response.json();
      if (response.ok) {
        setMessage("User deleted successfully");
      } else {
        setMessage(data.message || "Failed to delete user");
      }
      } catch (error) {
        setMesasage (' an error occured:' + error.message);
      }
    }

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


