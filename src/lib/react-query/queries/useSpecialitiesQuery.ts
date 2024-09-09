import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "../../../api/services/specialities";
import { QUERY_KEYS } from "../query-keys";

export const useSpecialitiesQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.SPECIALITIES],
    queryFn: () => getAllServices(),
  });
};
