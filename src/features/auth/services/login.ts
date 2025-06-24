export interface Params {
  email: string;
  password: string;
}

export const Login = async ({ email, password }: Params) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return data;
};
