export interface Params {
  email: string;
  password: string;
}

export const Login = async ({ email, password }: Params) => {
  const res = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  console.log(data);
  return data;
};
