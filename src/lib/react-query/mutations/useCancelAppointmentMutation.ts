// hooks/useCancelAppointmentMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { cancelAppointment } from "../../../api/services/appointment";
import { QUERY_KEYS } from "../query-keys";

export const useCancelAppointmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CLIENT_APPOINTMENTS],
      });
      toast.success("Consulta cancelada com sucesso!");
    },
  });
};
