import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "../services/specialities.service";
import { useState } from "react";

export const useAppointment = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(
    null
  );

  const { data: specialities } = useQuery({
    queryKey: ["specialities"],
    queryFn: () => getAllServices(),
  });

  return {
    specialities,
    selectedSpeciality,
    setSelectedSpeciality,
  };
};
