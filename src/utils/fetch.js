export const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

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
    const response = await fetch("http://localhost:5001/char/addCharacter", {
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
    });

    const data = await response.json();
    console.log("data ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCharater = async (name) => {
  try {
    const response = await fetch(
      `http://localhost:5001/char/deleteCharacter/${name}`,
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
