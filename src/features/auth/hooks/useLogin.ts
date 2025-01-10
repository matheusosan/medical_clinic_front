import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FORM_ERRORS_MESSAGES } from "../../../constants/form-errors";
import { useLoginMutation } from "./useLoginMutation";

const schema = z.object({
  email: z.string().email(FORM_ERRORS_MESSAGES.EMAIL),
  password: z.string().min(6, FORM_ERRORS_MESSAGES.PASSWORD),
});

export type LoginSchema = z.infer<typeof schema>;

export const useLogin = () => {
  const { mutate, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginSchema) => {
    mutate(data);
  };
  const isDisabled = isPending || isSubmitting;

  return {
    errors,
    isSubmitting,
    isDisabled,
    handleSubmit,
    register,
    onSubmit,
  };
};
