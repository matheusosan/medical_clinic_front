import { useEffect, useState } from "react";
import { fetchOccupiedTimes } from "../services";

export const useCheckScheduledTimes = (
  specialityInput: string,
  dateInput: string
) => {
  const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(
    null
  );
  const [occupiedTimes, setOccupiedTimes] = useState<string[]>([]);

  useEffect(() => {
    const loadOccupiedTimes = async () => {
      if (specialityInput && dateInput) {
        const times = await fetchOccupiedTimes(dateInput, specialityInput);
        setOccupiedTimes(
          times.data.map((appointment) => appointment.dataAgendada)
        );
      }
    };

    loadOccupiedTimes();
  }, [specialityInput, dateInput]);

  return {
    occupiedTimes,
    selectedSpeciality,
    setSelectedSpeciality,
  };
};
