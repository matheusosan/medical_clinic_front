import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setToken } from "../../../utils/token-util";
import { Login } from "../services";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: Login,
    onSuccess: (data) => {
      const token = data.token;

      if (token) {
        setToken("access_token", token, {
          secure: true,
          sameSite: "Strict",
          expires: 1,
        });
        navigate("/");
        toast.success("Login realizado com sucesso!");
      } else {
        toast.error("Credenciais inválidas.");
      }
    },
    onError: (error) => {
      toast.error(`Ocorreu um erro: ${error.message || "Erro desconhecido"}`);
    },
  });
};
