import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { findCostumerByCpf } from "../api/services/costumer.service";

const schema = z.object({
  cpf: z.string().min(11).max(11),
});

type Schema = z.infer<typeof schema>;

export const useCostumer = () => {
  const { register, handleSubmit, watch } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const cpfInput = watch("cpf");

  const onSubmit = () => {
    refetch();
  };

  const {
    data: client,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => findCostumerByCpf(cpfInput),
    enabled: false,
    retry: false,
  });

  return {
    client,
    isLoading,
    isError,
    onSubmit,
    refetch,
    register,
    handleSubmit,
  };
};
