import { useQuery } from "@tanstack/react-query";
import { Costumer, findCostumerByCpf } from "../../../api/services/costumer";
import { QUERY_KEYS } from "../query-keys";

export const useGetClientByCpfQuery = (cpf: string) => {
  return useQuery<Costumer, Error>({
    queryKey: [QUERY_KEYS.COSTUMER],
    queryFn: () => findCostumerByCpf(cpf),
    enabled: false,
    retry: false,
  });
};
