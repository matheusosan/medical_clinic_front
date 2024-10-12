import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FORM_ERRORS_MESSAGES } from "./../../../constants/form-errors";
import { useCheckScheduledTimes } from "./../../../hooks/useCheckScheduledTimes";
import { useCreateAppointmentMutation } from "./../../../lib/react-query/mutations/useCreateAppointmentMutation";
import { useGetClientByCpfQuery } from "./../../../lib/react-query/queries/useGetClientByCpfQuery";
import { useSpecialitiesQuery } from "./../../../lib/react-query/queries/useSpecialitiesQuery";

const schema = z.object({
  speciality: z.string().refine((value) => value !== "default", {
    message: FORM_ERRORS_MESSAGES.SPECIALITY,
  }),
  selectedDate: z.string().date(FORM_ERRORS_MESSAGES.APPOINTMENT_SELECTED_DATE),
  time: z.string().refine((value) => value !== "", {
    message: "Selecione um horário",
  }),
  cpf: z
    .string()
    .min(14, "Digite um CPF válido")
    .max(14, "Digite um CPF válido"),
});

export type AppointmentSchema = z.infer<typeof schema>;

export const useAppointment = () => {
  const { data: specialities } = useSpecialitiesQuery();

  const {
    register,
    watch,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<AppointmentSchema>({
    resolver: zodResolver(schema),
  });

  const cpfInput = watch("cpf");
  const specialityInput = watch("speciality");
  const dateInput = watch("selectedDate");

  const {
    data: client,
    isLoading: isClientLoading,
    isError: isClientError,
    refetch,
  } = useGetClientByCpfQuery(cpfInput);

  const onSubmitCpf = () => {
    if (cpfInput.length === 14) {
      refetch();
    }
  };

  const { occupiedTimes } = useCheckScheduledTimes(specialityInput, dateInput);

  const { mutate } = useCreateAppointmentMutation();

  const onSubmit = (data: AppointmentSchema) => {
    mutate({ data, clientId: client!.id! });
  };

  return {
    client,
    control,
    errors,
    handleSubmit,
    isClientError,
    isClientLoading,
    occupiedTimes,
    onSubmit,
    onSubmitCpf,
    register,
    setValue,
    specialities,
  };
};
