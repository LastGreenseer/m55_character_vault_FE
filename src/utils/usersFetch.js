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
    console.log("data in login request: ", data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
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

export const deleteAccount = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/deleteAcc/${id}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Deletion error", error);
    throw error;
  }
};
