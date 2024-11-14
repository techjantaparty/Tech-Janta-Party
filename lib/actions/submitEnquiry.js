"use server";

export const submitEnquiry = async (data) => {
  const res = await fetch(process.env.DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  });

  return res.ok;
};
