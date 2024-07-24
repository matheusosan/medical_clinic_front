import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { findCostumerByCpf } from "../../services/costumer.service";

export const useCostumer = () => {
  const [cpf, setCpf] = useState("");

  const { data, error, isError, refetch, isLoading } = useQuery({
    queryKey: ["costumerData", cpf],
    queryFn: () => findCostumerByCpf(cpf),
    enabled: false,
    retry: false,
  });

  const handleClick = () => {
    if (cpf) {
      refetch();
    }
  };

  return {
    cpf,
    setCpf,
    handleClick,
    data,
    error,
    isError,
    isLoading,
  };
};
