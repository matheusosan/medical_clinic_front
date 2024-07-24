import { useAppointment } from "../../hooks/useAppointment";

const horarios = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function Appointment() {
  const {
    data,
    selectedDate,
    selectedHour,
    selectedService,
    handleDateChange,
    handleSelectChange,
    handleSelectHour,
  } = useAppointment();

  return (
    <div className="flex flex-col flex-1 px-60 py-12 gap-10">
      <div className="gap-5">
        <h2 className="font-bold text-xl">
          Selecione a especialidade desejada
        </h2>
        <select onChange={handleSelectChange} className="w-64">
          {data &&
            data!.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
        </select>
      </div>
      <div className="gap-5">
        <h2 className="font-bold text-xl">Valor da Consulta</h2>
        <p>{selectedService ? selectedService.price : "R$00,00"}</p>
      </div>
      <div className="gap-5">
        <h2 className="font-bold text-xl">Selecione uma data</h2>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <div className="flex flex-col gap-4 ">
        <h2 className="font-bold text-xl">Selecione um horário</h2>
        <div className="grid grid-cols-3 gap-2">
          {horarios.map((horario) => (
            <button
              key={horario}
              className={`py-2 px-4 m-2 rounded ${
                selectedHour === horario
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleSelectHour(horario)}
            >
              {horario}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
