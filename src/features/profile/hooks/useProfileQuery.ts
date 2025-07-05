import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../features/profile/services";
import { QUERY_KEYS } from "./../../../lib/react-query/query-keys/index";
import { getToken } from "./../../../utils/token-util";

export const useProfileQuery = () => {
  const token = getToken();

  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: getProfile,
    retry: false,
    staleTime: 0,
    enabled: !!token,
  });
};
