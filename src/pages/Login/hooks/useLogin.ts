import {
  LoginSchema,
  useLoginForm,
} from "../../../lib/hookform/hooks/useLoginForm";
import { useLoginMutation } from "../../../lib/react-query/mutations/useLoginMutation";

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
