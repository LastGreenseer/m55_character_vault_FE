import React, { useState } from "react";
import UpdateProfile from "../components/userComponents/UpdateProfile";

// import DeleteAccount from "../components/DeleteAccount";

const Profile = ({ loggedUser, logOrSignSetters }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>Username: {loggedUser.user.username}</p>
        <p>Email: {loggedUser.user.email}</p>
      </div>
      <button onClick={toggleEdit}>
        {isEditing ? "Cancel Edit" : "Edit Profile"}
      </button>
      {isEditing && <UpdateProfile loggedUser={loggedUser} />}
      {/* <DeleteAccount logOrSignSetters={logOrSignSetters} /> */}
    </div>
  );
};

export default Profile;
