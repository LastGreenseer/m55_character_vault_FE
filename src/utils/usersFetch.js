export const login = async (username, password) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAcc = async (updateData) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users/updateAcc`,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
};

export const deleteAcc = async (deleteData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/deleteAcc/${id}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteData),
      }
    );

    const data = await response.json();
    if (response.ok) {
      setMessage("User deleted successfully");
    } else {
      setMessage(data.message || "Failed to delete user");
    }
  } catch (error) {
    setMessage("An error occurred: " + error.message);
  }
};
