import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Costumer,
  createClient,
} from "./../../../api/services/costumer.service";

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (formData: Costumer) => {
      return createClient(formData);
    },
    onSuccess: (response) => {
      if (response.ok) {
        navigate("/");
        toast.success("Cadastro realizado com sucesso!");
      } else {
        response.json().then((errorData) => {
          toast.error(`Ocorreu um erro: ${errorData.message}`);
        });
      }
    },
    onError: (error: any) => {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    },
  });
};
