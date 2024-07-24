import { Link } from "react-router-dom";
import Header from "../components/Header";
import Costumer from "../components/Costumer";
import Appointment from "../components/Appointment";

export default function Agendamento() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen h-auto w-full py-8 gap-4 mt-24">
        <h2 className="font-extrabold text-4xl px-[15%] w-full text-left">
          Agende sua <span className="text-[#0B4FFF]">consulta</span>
        </h2>

        <div className="flex justify-evenly mt-8 w-[1670px] h-[630px] border border-[#D9D9D9]">
          <Costumer />
          <Appointment />
        </div>

        <div className="flex w-[1670px] justify-between">
          <Link
            to={"/"}
            className="px-12 py-4 font-bold  bg-[#F35555] text-white"
          >
            CANCELAR
          </Link>
          <button className="px-12 py-4 font-bold bg-[#42DA5B] text-white">
            AGENDAR
          </button>
        </div>
      </main>
    </>
  );
}
