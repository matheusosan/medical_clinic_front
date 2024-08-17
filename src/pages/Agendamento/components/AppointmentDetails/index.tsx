import { Controller, useFormContext } from "react-hook-form";
import { AppointmentSchema } from "../..";
import { useCheckScheduledTimes } from "../../../../hooks/useCheckScheduledTimes";
import { useSpecialitiesQuery } from "../../../../lib/react-query/hooks/useSpecialitiesQuery";

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

export default function AppointmentDetails() {
  const { data: specialities } = useSpecialitiesQuery();

  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext<AppointmentSchema>();

  const specialityInput = watch("speciality");
  const dateInput = watch("selectedDate");

  const { occupiedTimes } = useCheckScheduledTimes(specialityInput, dateInput);

  return (
    <div className="flex flex-col flex-1 px-60 py-12 gap-10">
      <div className="gap-5">
        <h2 className="font-bold text-xl">
          Selecione a especialidade desejada
        </h2>
        <select
          role="search"
          className="w-64 bg-transparent outline-none"
          {...register("speciality")}
        >
          <option value="default">Selecione uma opção</option>
          {specialities?.map((speciality) => (
            <option key={speciality.id} value={speciality.id}>
              {speciality.name}
            </option>
          ))}
        </select>
        {errors.speciality && (
          <p className="text-red-500 mt-2 text-sm">
            {errors.speciality.message}
          </p>
        )}
      </div>
      <div className="gap-5">
        <h2 className="font-bold text-xl">Valor da Consulta</h2>
        <p></p>
      </div>
      <div className="gap-5">
        <h2 className="font-bold text-xl">Selecione uma data</h2>
        <input type="date" {...register("selectedDate")} />
        {errors.selectedDate && (
          <p className="text-red-500 mt-2 text-sm">
            {errors.selectedDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4 ">
        <h2 className="font-bold text-xl">Selecione um horário</h2>
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-3 gap-2">
              {horarios.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => field.onChange(time)}
                  className={`${
                    occupiedTimes.includes(time)
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : field.value === time
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  } rounded-xl py-1 px-3 border border-gray-300 focus:outline-none`}
                  disabled={occupiedTimes.includes(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        />
        {errors.time && (
          <p className="text-red-500 mt-2 text-sm">{errors.time.message}</p>
        )}
      </div>
    </div>
  );
}
