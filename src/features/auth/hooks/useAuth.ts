import { useQueryClient } from "@tanstack/react-query";
import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../../../lib/react-query/query-keys";
import { getToken, removeToken } from "../../../utils/token-util";
import { useProfileQuery } from "../../profile/hooks/useProfileQuery";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    data: userData,
    isError: isUserError,
    error,
    isLoading: isUserLoading,
  } = useProfileQuery();
  const token = getToken();

  useLayoutEffect(() => {
    if (location.pathname === "/perfil" && (!token || error)) {
      removeToken("access_token");
      navigate("/login");
      return;
    }
  }, [token, error, navigate, location.pathname]);

  useLayoutEffect(() => {
    if (location.pathname === "/login" && token) {
      navigate("/");
      return;
    }
  }, [token, navigate, location.pathname]);

  const logout = () => {
    removeToken("access_token");
    queryClient.resetQueries({
      queryKey: [QUERY_KEYS.PROFILE],
    });
  };

  return { userData, isUserError, isUserLoading, logout, token };
};
