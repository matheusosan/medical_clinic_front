import { UseMutateFunction } from "@tanstack/react-query";
import { LoaderCircle, Trash2 } from "lucide-react";
import React from "react";
import { getStatusColor } from "../../../../utils/colors/getStatusColor";
import { formatDateToBrazilianWithHour } from "../../../../utils/formatters/formatDateToBrl";
import { toBRL } from "../../../../utils/formatters/number-to-brl";
import { Data } from "../../hooks/useClientAppointmentsQuery";
import SkeletonAppointments from "../AppointmentsSkeleton";

interface UserAppointmentsProps {
  sortBy: string;
  appointments: Data[] | undefined;
  isAppointmentsLoading: boolean;
  isPending: boolean;
  mutate: UseMutateFunction<void, Error, number, unknown>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export default function UserAppointments({
  appointments,
  isAppointmentsLoading,
  isPending,
  mutate,
  setSortBy,
  sortBy,
}: UserAppointmentsProps) {
  return (
    <section className="flex flex-col w-full h-full gap-2 md:gap-12">
      <h2 className="text-3xl text-center md:text-left py-6 w-full font-bold md:px-64 text-[#0B4FFF]">
        Minhas Consultas
      </h2>

      <div className="flex w-full flex-col md:px-40 gap-4">
        <div className="flex justify-center md:justify-start gap-2">
          <p>Filtrar por: </p>
          <select
            className="bg-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="mostexpensive">maior valor</option>
            <option value="cheapest">menor valor</option>
            <option value="oldest">anteriores</option>
            <option value="newest">futuras</option>
          </select>
        </div>

        {isAppointmentsLoading ? (
          <SkeletonAppointments />
        ) : (
          <>
            {appointments && appointments.length > 0 ? (
              <ul>
                {appointments.map((appointment) => (
                  <div
                    className="flex items-center w-full justify-between md:px-12 border-b border-slate-300 py-4 shadow-slate-300/75 shadow-md cursor-pointer hover:scale-105 transition-transform duration-500 relative"
                    key={appointment.id}
                  >
                    <div className="flex flex-col justify-center md:justify-start w-full md:flex-row gap-2 md:gap-12">
                      <div className="flex flex-col items-center">
                        <label className="font-bold text-xl">
                          Especialidade
                        </label>
                        <h2>{appointment.service.name}</h2>
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="font-bold text-xl">Valor</label>
                        <h2>{toBRL(appointment.service.price)}</h2>
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="font-bold text-xl">
                          Data agendada
                        </label>
                        <h2>
                          {formatDateToBrazilianWithHour(
                            appointment.dataAgendada
                          )}
                        </h2>
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="font-bold text-xl">Status</label>
                        <h2 className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </h2>
                      </div>
                      {appointment.status === "CANCELADO" && (
                        <div className="flex flex-col items-center">
                          <label className="font-bold text-xl">
                            Motivo Cancelamento
                          </label>
                          <h2>{appointment.cancellationReason}</h2>
                        </div>
                      )}
                    </div>
                    {appointment.status !== "CANCELADO" && (
                      <button
                        className="absolute top-4 right-4 md:static"
                        onClick={() => mutate(appointment.id)}
                      >
                        {isPending ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          <Trash2 color="red" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </ul>
            ) : (
              <p className="text-center text-xl">Não há agendamentos feitos.</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
