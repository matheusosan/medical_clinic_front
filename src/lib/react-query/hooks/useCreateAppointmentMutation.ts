import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createAppointment } from "../../../api/services/appointment.service";
import { AppointmentSchema } from "./../../../pages/Agendamento/index";

export const useCreateAppointmentMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      data,
      clientId,
    }: {
      data: AppointmentSchema;
      clientId: number;
    }) => {
      return createAppointment(data, clientId);
    },
    onSuccess: (response) => {
      if (response.ok) {
        navigate("/");
        toast.success("Consulta agendada com sucesso!");

        queryClient.removeQueries({ queryKey: ["costumer"] });
      } else {
        response.json().then((errorData) => {
          toast.error(`Ocorreu um erro: ${errorData.message}`);
        });
      }
    },
    onError: (error: any) => {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    },
  });
};
