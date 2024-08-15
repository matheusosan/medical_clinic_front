import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createAppointment } from "../api/services/appointment.service";
import { AppointmentSchema } from "./../pages/Agendamento/schemas/appointment.schema";
import { useCostumer } from "./useCostumer";

export const useAppointment = () => {
  const navigate = useNavigate();
  const { client } = useCostumer();

  const onSubmit = async (data: AppointmentSchema) => {
    try {
      const response = await createAppointment(data, client!.id);

      if (response.ok) {
        navigate("/");
        toast.success("Consulta agendada com sucesso!");
      } else {
        const errorData = await response.json();
        toast.error(`Ocorreu um erro: ${errorData.message}`);
      }
    } catch (error: any) {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    }
  };

  return {
    onSubmit,
  };
};
