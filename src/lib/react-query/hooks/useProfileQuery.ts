import { useQuery } from "@tanstack/react-query";
import {
  ClientResponseDTO,
  getProfile,
} from "../../../api/services/costumer.service";
import { QUERY_KEYS } from "../query-keys";

export const useProfileQuery = () => {
  return useQuery<ClientResponseDTO, Error>({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: getProfile,
    retry: false,
  });
};
