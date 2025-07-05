import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../features/profile/services";
import { QUERY_KEYS } from "./../../../lib/react-query/query-keys/index";

export const useProfileQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: getProfile,
    retry: false,
    refetchOnMount: true,
  });
};
