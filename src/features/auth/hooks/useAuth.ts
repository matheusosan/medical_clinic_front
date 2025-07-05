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
    isLoading: isUserLoading,
  } = useProfileQuery();
  const token = getToken();

  const userId = userData?.data.id;

  useLayoutEffect(() => {
    if (
      location.pathname === "/perfil" &&
      !isUserLoading &&
      (!token || isUserError)
    ) {
      removeToken("access_token");
      navigate("/login");
    }
  }, [token, isUserError, isUserLoading, navigate, location.pathname, userId]);

  useLayoutEffect(() => {
    if (
      location.pathname === "/login" &&
      token &&
      !isUserLoading &&
      !isUserError
    ) {
      navigate("/");
    }
  }, [token, isUserLoading, isUserError, navigate, location.pathname, userId]);

  useLayoutEffect(() => {
    if (
      location.pathname === "/login" &&
      token &&
      !isUserLoading &&
      !isUserError
    ) {
      navigate("/");
    }
  }, [token, isUserLoading, isUserError, navigate, location.pathname]);

  const logout = () => {
    removeToken("access_token");
    queryClient.resetQueries({
      queryKey: [QUERY_KEYS.PROFILE],
    });
  };

  return { userData, isUserError, isUserLoading, userId, logout, token };
};
