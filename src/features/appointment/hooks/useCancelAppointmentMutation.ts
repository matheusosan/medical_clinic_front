import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { QUERY_KEYS } from "../../../lib/react-query/query-keys";
import { cancelAppointment } from "../services";

export const useCancelAppointmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelAppointment,
    onSuccess: (response) => {
      if (response.statusCode === 200) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.CLIENT_APPOINTMENTS],
        });
        toast.success("Consulta cancelada com sucesso!");
        queryClient.removeQueries({ queryKey: ["costumer"] });
      }
    },
    onError: (error) => {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    },
  });
};
