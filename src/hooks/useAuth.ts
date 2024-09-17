import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "../lib/react-query/queries/useProfileQuery";
import { getToken } from "../utils/token-util";

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    data: userData,
    isError: isUserError,
    error,
    isLoading: isUserLoading,
  } = useProfileQuery();
  const token = getToken();

  const userId = userData?.id;

  useEffect(() => {
    if (!token || error) {
      console.error("Erro de autenticação:", error);
      Cookies.remove("access_token");
      navigate("/login");
    }
  }, [token, isUserError, error, navigate]);

  return { userData, isUserError, isUserLoading, userId };
};
