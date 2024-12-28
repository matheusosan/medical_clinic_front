import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/react-query/query-keys";
import { Costumer } from "../../auth/services/createClient";
import { findCostumerByCpf } from "../services";

export const useGetClientByCpfQuery = (cpf: string) => {
  return useQuery<Costumer, Error>({
    queryKey: [QUERY_KEYS.COSTUMER],
    queryFn: () => findCostumerByCpf(cpf),
    enabled: false,
    retry: false,
  });
};
