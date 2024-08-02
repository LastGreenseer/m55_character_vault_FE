import { useState } from "react";
import { deleteAcc } from "../../utils/usersFetch";

const DeleteAccount = ({ logOrSignSetters }) => {
  const fakeUser = {
    username: "person",
    email: "email@email",
    password: "pass123",
  };
};

const [userId, setUserId] = useState("");
// const [message, setMessage] = useState("");

const handleDelete = async () => {
  try {
    const data = await deleteAcc();
    if (data.message === "User deleted successfully") {
      logOrSignSetters.setLoggedUser(null);
      logOrSignSetters.setIsLoggedIn(false);
    }
  } catch (error) {
    setMesasage(" an error occured:" + error.message);
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

export default DeleteAccount;
