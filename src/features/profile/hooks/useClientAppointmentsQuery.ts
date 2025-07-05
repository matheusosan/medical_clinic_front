import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/react-query/query-keys";
import { getAllAppointmentsByClient } from "../services/getAllAppointmentsByClient";

export const useClientAppointmentsQuery = (
  userId?: string,
  sortBy: string = "newest"
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CLIENT_APPOINTMENTS, sortBy],
    queryFn: () => getAllAppointmentsByClient(userId!, sortBy),
    enabled: !!userId,
    retry: false,
    refetchOnMount: true,
  });
};
