export const getAllUsers = async () => {
  const res = await fetch("http://localhost:8080/service");
  const data = await res.json();
  return data;
};
