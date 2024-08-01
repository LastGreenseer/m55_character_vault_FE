export const getAvatar = async (style, seed) => {
  try {
    const response = await fetch(
      `https://avatars.dicebear.com/api/${style}/${seed}.svg`,
      {
        method: "GET",
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error("No response from network");
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching avatar", error);
    throw error;
  }
};
