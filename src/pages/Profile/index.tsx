import { LoaderCircle, Trash2 } from "lucide-react";
import Header from "../../components/Header";
import { formatDateToBRL } from "../../utils/formatDateToBrl";
import { getStatusColor } from "../../utils/getStatusColor";
import { toBRL } from "../../utils/number-to-brl";
import SkeletonAppointments from "./components/AppointmentsSkeleton";
import ProfileSkeleton from "./components/ProfileSkeleton";
import { useProfile } from "./hooks/useProfile";

function Profile() {
  const {
    sortBy,
    userData,
    isUserLoading,
    appointments,
    isAppointmentsLoading,
    isPending,
    mutate,
    setSortBy,
  } = useProfile();

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row h-screen w-full items-center">
        <section className="flex flex-col items-center h-full w-full md:w-[400px] border-r border-slate-300 gap-4 py-4 md:py-0 border-b  md:gap-12">
          <h2 className="text-3xl text-center md:py-6 w-full font-bold text-[#0B4FFF]">
            Perfil
          </h2>
          {isUserLoading ? (
            <ProfileSkeleton />
          ) : (
            <>
              <img
                className="rounded-full w-60"
                src="https://media.licdn.com/dms/image/v2/D4D03AQEf783BDuouxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671417760869?e=1730937600&v=beta&t=hl2vo6QvswKgqip_2lAa0s4IypQ-hOd5OcryUuBMj44"
                alt=""
              />
              <h2 className="text-black ">
                Bem vindo,{" "}
                <span className="font-bold text-[#0B4FFF]">
                  {userData?.name}
                </span>
              </h2>
            </>
          )}
        </section>

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
                <option value="oldest">mais antiga</option>
                <option value="newest">mais recente</option>
              </select>
            </div>

            {isAppointmentsLoading ? (
              <SkeletonAppointments />
            ) : (
              <ul>
                {appointments &&
                  appointments.map((appointment) => (
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
                          <h2>{formatDateToBRL(appointment.dataAgendada)}</h2>
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
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
