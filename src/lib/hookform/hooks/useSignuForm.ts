import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FORM_ERRORS_MESSAGES } from "../../../constants/form-errors";

const schema = z.object({
  name: z.string().min(1, FORM_ERRORS_MESSAGES.NAME),
  birthDate: z.string().date(FORM_ERRORS_MESSAGES.BIRTHDATE),
  cpf: z
    .string()
    .min(11, FORM_ERRORS_MESSAGES.CPF)
    .max(11, FORM_ERRORS_MESSAGES.CPF),
  password: z.string().min(6, FORM_ERRORS_MESSAGES.PASSWORD),
  phoneNumber: z
    .string()
    .min(10, FORM_ERRORS_MESSAGES.PHONENUMBER)
    .max(11, FORM_ERRORS_MESSAGES.PHONENUMBER),
  email: z.string().email(FORM_ERRORS_MESSAGES.EMAIL),
});

export type SignupSchema = z.infer<typeof schema>;

export const useSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
  };
};
