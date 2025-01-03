import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/react-query/query-keys";
import { getAllAppointmentsByClient } from "../services/getAllAppointmentsByClient";

export interface Data {
  id: number;
  dataAgendada: string;
  status: "CANCELADO" | "AGENDADO";
  cancellationReason: string;
  service: Service;
}

export interface Service {
  id: number;
  name: string;
  price: number;
}

export const useClientAppointmentsQuery = (
  userId?: number,
  sortBy: string = "newest"
) => {
  return useQuery<Data[]>({
    queryKey: [QUERY_KEYS.CLIENT_APPOINTMENTS, sortBy],
    queryFn: () => getAllAppointmentsByClient(userId!, sortBy),
    enabled: !!userId,
    retry: false,
    refetchOnMount: true,
  });
};
