import { useQuery } from "@tanstack/react-query";
import { findCostumerByCpf } from "../../../api/services/costumer";
import { QUERY_KEYS } from "../query-keys";

interface Costumer {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  birthDate: string;
}

export const useGetClientByCpfQuery = (cpf: string) => {
  return useQuery<Costumer, Error>({
    queryKey: [QUERY_KEYS.COSTUMER],
    queryFn: () => findCostumerByCpf(cpf),
    enabled: false,
    retry: false,
  });
};
