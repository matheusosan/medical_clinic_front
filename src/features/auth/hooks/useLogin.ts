import { LoginSchema, useLoginForm } from "./useLoginForm";
import { useLoginMutation } from "./useLoginMutation";

export const useLogin = () => {
  const { handleSubmit, register, errors, isSubmitting } = useLoginForm();
  const { mutate, isPending } = useLoginMutation();

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
