import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useCancelAppointmentMutation } from "../../../lib/react-query/mutations/useCancelAppointmentMutation";
import { useClientAppointmentsQuery } from "../../../lib/react-query/queries/useClientAppointmentsQuery";

export const useProfile = () => {
  const [sortBy, setSortBy] = useState("newest");
  const { userData, userId, isUserLoading } = useAuth();
  const { data: appointments, isLoading: isAppointmentsLoading } =
    useClientAppointmentsQuery(userId, sortBy);
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
