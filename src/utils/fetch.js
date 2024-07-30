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
