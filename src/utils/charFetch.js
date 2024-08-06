export const addCharacter = async (
  name,
  age,
  pronouns,
  description,
  book,
  userId
) => {
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
          userId: userId,
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

export const getCharacterFetch = async (name) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/char/getCharacter/${name}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const getAllCharactersFetch = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/char/getAllCharacters`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("data ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
