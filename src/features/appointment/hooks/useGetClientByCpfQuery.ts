import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/react-query/query-keys";
import { findCostumerByCpf } from "../services";

export const useGetClientByCpfQuery = (cpf: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.COSTUMER],
    queryFn: () => findCostumerByCpf(cpf),
    enabled: false,
    retry: false,
  });
};
