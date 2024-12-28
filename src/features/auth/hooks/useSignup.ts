import { useSignupMutation } from "./useSignUpMutation";
import { SignupSchema, useSignupForm } from "./useSignupForm";
export const useSignup = () => {
  const { errors, handleSubmit, isSubmitting, register, setValue } =
    useSignupForm();
  const { mutate } = useSignupMutation();

  const onSubmit = (data: SignupSchema) => {
    mutate(data);
  };

  return {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    setValue,
    onSubmit,
  };
};
