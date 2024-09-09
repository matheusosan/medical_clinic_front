import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorResponseDTO } from "../../../api/dtos/error.response.dto";
import { Costumer, createClient } from "../../../api/services/costumer";

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
        response.json().then((errorData: ErrorResponseDTO) => {
          toast.error(`Ocorreu um erro: ${errorData.message}`);
        });
      }
    },
    onError: (error: ErrorResponseDTO) => {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    },
  });
};
