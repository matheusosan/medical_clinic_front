import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FORM_ERRORS_MESSAGES } from "../../../constants/form-errors";

const schema = z.object({
  email: z.string().email(FORM_ERRORS_MESSAGES.EMAIL),
  password: z.string().min(6, FORM_ERRORS_MESSAGES.PASSWORD),
});

export type LoginSchema = z.infer<typeof schema>;

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
  };
};
