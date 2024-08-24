// hooks/useAuth.ts

import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "../lib/react-query/hooks/useProfileQuery";

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    data: userData,
    isError: isUserError,
    error,
    isLoading: isUserLoading,
  } = useProfileQuery();
  const token = Cookies.get("access_token");

  useEffect(() => {
    if (!token || isUserError) {
      console.error("Erro de autenticação:", error);
      Cookies.remove("access_token");
      navigate("/login");
    }
  }, [token, isUserError, error, navigate]);

  return { userData, isUserError, isUserLoading };
};
