import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/react-query/query-keys";
import { getAllServices } from "../services/getAllServices";

export const useSpecialitiesQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.SPECIALITIES],
    queryFn: () => getAllServices(),
  });
};
