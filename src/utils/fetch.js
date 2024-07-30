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
  const response = await fetch("http://localhost:5001/users/updateAcc", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

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