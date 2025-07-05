import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorResponseDTO } from "../../../api/dtos/error.response.dto";
import { createAppointment } from "../services";
import { AppointmentSchema } from "./useAppointment";

export const useCreateAppointmentMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      data,
      clientId,
    }: {
      data: AppointmentSchema;
      clientId: string;
    }) => {
      return createAppointment(data, clientId);
    },
    onSuccess: (response) => {
      if (response.statusCode === 201) {
        navigate("/");
        toast.success("Consulta agendada com sucesso!");

        queryClient.removeQueries({ queryKey: ["costumer"] });
      }
    },
    onError: (error: ErrorResponseDTO) => {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    },
  });
};
