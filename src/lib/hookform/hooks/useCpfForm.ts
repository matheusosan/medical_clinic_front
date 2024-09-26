import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  cpf: z
    .string()
    .min(14, "Digite um CPF válido")
    .max(14, "Digite um CPF válido"),
});

type CpfSchema = z.infer<typeof schema>;

export const useCpfForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CpfSchema>({
    resolver: zodResolver(schema),
  });

  const cpfInput = watch("cpf");

  return {
    errors,
    cpfInput,
    register,
    handleSubmit,
    setValue,
  };
};
