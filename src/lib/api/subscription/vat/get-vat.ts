import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

export const QUERY_KEY_FOR_VAT = "vat";

const getData = async (): Promise<TApiResponse<TVat | null>> => {
  const url = `/subscription/vat`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TVat | null>;
  return res;
};

export const useGetVat = () => {
  const queryData = useQuery([QUERY_KEY_FOR_VAT], () => getData(), {});

  return queryData;
};
export type TVat = {
  id: number;
  value: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};
