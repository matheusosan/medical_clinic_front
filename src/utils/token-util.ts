import Cookies from "js-cookie";

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

export const getToken = () => {
  const token = Cookies.get("access_token");
  return token ?? "";
};
export const setToken = (
  tokenName: string,
  tokenValue: string,
  options?: CookieOptions
) => {
  return Cookies.set(tokenName, tokenValue, options);
};

export const removeToken = (tokenName: string) => {
  return Cookies.remove(tokenName);
};
