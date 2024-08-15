import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { createClient } from "../api/services/costumer.service";
import { toast } from "react-toastify";
import { FORM_ERRORS_MESSAGES } from "../constants/form-errors";

const schema = z.object({
  name: z.string().min(1, FORM_ERRORS_MESSAGES.NAME),
  birthDate: z.string().date(FORM_ERRORS_MESSAGES.BIRTHDATE),
  cpf: z
    .string()
    .min(11, FORM_ERRORS_MESSAGES.CPF)
    .max(11, FORM_ERRORS_MESSAGES.CPF),
  phoneNumber: z
    .string()
    .min(10, FORM_ERRORS_MESSAGES.PHONENUMBER)
    .max(11, FORM_ERRORS_MESSAGES.PHONENUMBER),
  email: z.string().email(FORM_ERRORS_MESSAGES.EMAIL),
});

type Schema = z.infer<typeof schema>;

export const useSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (event: Schema) => {
    try {
      await createClient(event);
      toast.success("Usuário criado!");
      navigate("/");
    } catch (e) {
      return toast.error(`Ocorreu um erro: ${e}`);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
};
