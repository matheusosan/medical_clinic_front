import { useState } from "react";
import { useCancelAppointmentMutation } from "../../appointment/hooks/useCancelAppointmentMutation";
import { useAuth } from "../../auth/hooks/useAuth";
import { useClientAppointmentsQuery } from "./useClientAppointmentsQuery";

export const useProfile = () => {
  const [sortBy, setSortBy] = useState("newest");
  const { userData, userId, isUserLoading } = useAuth();
  const { data: appointments, isLoading: isAppointmentsLoading } =
    useClientAppointmentsQuery(userId!, sortBy);
  const { mutate, isPending } = useCancelAppointmentMutation();

  return {
    appointments,
    userData,
    isUserLoading,
    isAppointmentsLoading,
    isPending,
    sortBy,
    setSortBy,
    mutate,
  };
};
