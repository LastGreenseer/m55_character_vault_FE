const diceBear = process.env.REACT_APP_API_BASE_URL;

export const getAvatar = async (style, seed) => {
  try {
    const response = await fetch(`${diceBear}/${style}/${seed}.svg`, {
      method: "GET",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("No response from network");
    }

    const data = await response.text();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching avatar", error);
    throw error;
  }
};