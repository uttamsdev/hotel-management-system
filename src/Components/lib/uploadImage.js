export const uploadImage = async (formData) => {
  const url = `https://api.imgbb.com/1/upload?key=52a7c30a95d000395b196c985adb3c83`;
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const result = await res.json();
  return result;
};

export const handleSubmit = async ({ url, postData, method = "POST" }) => {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await res.json();
    console.log("post", result);
    return result;
  } catch (error) {}
};
