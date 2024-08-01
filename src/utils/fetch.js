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

export const addCharacter = async (name, age, pronouns, description, book) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/char/addCharacter`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: age,
          pronouns: pronouns,
          description: description,
          book: book,
        }),
      }
    );

    const data = await response.json();
    console.log("data ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCharacter = async (
  name,
  age,
  pronouns,
  description,
  book
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/char/updateCharacter/${name}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          pronouns,
          description,
          book,
        }),
      }
    );

    if (response.status === 204) {
      return { message: "No content" };
    }

    const data = await response.json();
    console.log("data ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCharacter = async (name) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/char/deleteCharacter/${name}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteAccount = async (deleteData) => {
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
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
