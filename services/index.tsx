export const submitComment = async (obj: any) => {
  const result = await fetch(`api/comments`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  return result.json();
};
