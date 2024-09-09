import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";
import Header from "../../components/Header";
import { FORM_ERRORS_MESSAGES } from "../../constants/form-errors";
import { useCpfForm } from "../../lib/hookform/hooks/useCpfForm";
import { useCreateAppointmentMutation } from "../../lib/react-query/mutations/useCreateAppointmentMutation";
import { useGetClientByCpfQuery } from "../../lib/react-query/queries/useGetClientByCpfQuery";
import AppointmentDetails from "./components/AppointmentDetails";
import CustomerDetails from "./components/CustomerDetails";

const schema = z.object({
  speciality: z.string().refine((value) => value !== "default", {
    message: FORM_ERRORS_MESSAGES.SPECIALITY,
  }),
  selectedDate: z.string().date(FORM_ERRORS_MESSAGES.APPOINTMENT_SELECTED_DATE),
  time: z.string().refine((value) => value !== "", {
    message: "Selecione um horário",
  }),
});

export type AppointmentSchema = z.infer<typeof schema>;

export default function Agendamento() {
  const methods = useForm<AppointmentSchema>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const { cpfInput } = useCpfForm();
  const { mutate } = useCreateAppointmentMutation();
  const { data: client } = useGetClientByCpfQuery(cpfInput);

  const onSubmit = (data: AppointmentSchema) => {
    mutate({ data, clientId: client!.id! });
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center h-full w-full py-8 gap-4 md:px-40">
        <h2 className="font-extrabold text-4xl px-[15%] w-full text-center md:text-left">
          Agende sua <span className="text-[#0B4FFF]">consulta</span>
        </h2>

        <FormProvider {...methods}>
          <form
            id="appointment"
            className="flex flex-col md:flex-row border border-slate-200 rounded-xl w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <CustomerDetails />
            <AppointmentDetails />
          </form>

          <div className="flex flex-col md:flex-row w-full justify-between">
            <Link
              to={"/"}
              className="px-12 py-4 text-sm font-bold md:rounded-xl text-center bg-[#c6131b] text-white md:shadow-[#9c9c9c] md:shadow-lg"
            >
              CANCELAR
            </Link>
            <button
              className="px-12 py-4 text-sm font-bold md:rounded-xl text-center bg-[#22bb33] transition-colors text-white md:shadow-[#9c9c9c] md:shadow-lg"
              form="appointment"
              type="submit"
            >
              AGENDAR
            </button>
          </div>
        </FormProvider>
      </main>
    </>
  );
}
