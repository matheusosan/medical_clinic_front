import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import AppointmentDetails from "../components/AppointmentDetails";
import CustomerDetails from "../components/CustomerDetails";
import { useAppointment } from "../hooks/useAppointment";

export default function Agendamento() {
  const data = useAppointment();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center h-full w-full py-8 gap-4 md:px-40">
        <h2 className="font-extrabold text-4xl px-[15%] w-full text-center md:text-left">
          Agende sua <span className="text-[#0B4FFF]">consulta</span>
        </h2>

        <form
          id="appointment"
          className="flex flex-col md:flex-row border border-slate-200 rounded-xl w-full"
          onSubmit={data.handleSubmit(data.onSubmit)}
        >
          <CustomerDetails props={data} />
          <AppointmentDetails props={data} />
        </form>

        <div className="flex flex-col md:flex-row w-full justify-between">
          <Link
            to={"/"}
            className="px-12 py-4 text-sm font-bold md:rounded-xl text-center bg-[#c6131b] text-white md:shadow-[#9c9c9c] md:shadow-lg button-hover"
          >
            CANCELAR
          </Link>
          <Button
            className="px-12 py-4 text-sm font-bold md:rounded-xl text-center bg-[#22bb33] text-white md:shadow-[#9c9c9c] md:shadow-lg"
            form="appointment"
            type="submit"
            label="AGENDAR"
          />
        </div>
      </main>
    </>
  );
}
