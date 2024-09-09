import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../../api/services/auth";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: Login,
    onSuccess: (data) => {
      const token = data.token;

      if (token) {
        Cookies.set("access_token", token, {
          secure: true,
          sameSite: "strict",
          expires: 1,
        });
        navigate("/");
        toast.success("Login realizado com sucesso!");
      } else {
        toast.error("Token não encontrado na resposta do servidor.");
      }
    },
    onError: (error) => {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    },
  });
};
