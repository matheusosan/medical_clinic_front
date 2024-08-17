import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";
import Header from "../../components/Header";
import { useCpfForm } from "../../lib/hookform/hooks/useCpfForm";
import { useCreateAppointmentMutation } from "../../lib/react-query/hooks/useCreateAppointmentMutation";
import { useGetClientByCpfQuery } from "../../lib/react-query/hooks/useGetClientByCpfQuery";
import AppointmentDetails from "./components/AppointmentDetails";
import CustomerDetails from "./components/CustomerDetails";

const schema = z.object({
  speciality: z.string().refine((value) => value !== "default", {
    message: "Selecione uma opção válida",
  }),
  selectedDate: z.string().date("Selecione uma data para consulta"),
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
      <main className="flex flex-col items-center min-h-screen h-auto w-full py-8 gap-4 mt-24 px-40">
        <h2 className="font-extrabold text-4xl px-[15%] w-full text-left">
          Agende sua <span className="text-[#0B4FFF]">consulta</span>
        </h2>

        <FormProvider {...methods}>
          <form
            id="appointment"
            className="flex border border-slate-200 rounded-xl w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <CustomerDetails />
            <AppointmentDetails />
          </form>

          <div className="flex w-full justify-between">
            <Link
              to={"/"}
              className="px-12 py-4 font-bold rounded-xl bg-[#F35555] text-white shadow-[#9c9c9c] shadow-lg"
            >
              CANCELAR
            </Link>
            <button
              className="px-12 py-4 font-bold rounded-xl bg-[#4bb92f] text-white shadow-[#9c9c9c] shadow-lg"
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
