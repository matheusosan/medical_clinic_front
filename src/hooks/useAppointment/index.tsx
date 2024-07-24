import { ChangeEvent, useState } from "react";
import { getAllServices, Service } from "../../services/specialities.service";
import { useQuery } from "@tanstack/react-query";

export const useAppointment = () => {
  const [selectedService, setSelectedService] = useState<Service | undefined>(
    undefined
  );

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  const { data } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => getAllServices(),
  });

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const service = data!.find((service) => service.id === Number(selectedId));
    setSelectedService(service);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSelectHour = (horario: string) => {
    setSelectedHour(horario);
  };

  return {
    selectedService,
    selectedDate,
    selectedHour,
    data,
    handleSelectChange,
    handleSelectHour,
    handleDateChange,
  };
};
