import {
  SignupSchema,
  useSignupForm,
} from "./../../../lib/hookform/hooks/useSignuForm";
import { useSignupMutation } from "./../../../lib/react-query/mutations/useSignUpMutation";
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
