import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TSupportCase } from "./get-support-case";

export const QUERY_KEY_FOR_SUPPORT_CASES = "support-cases";

const getData = async (): Promise<TApiResponse<TSupportCase[]>> => {
  const url = `/subscription/add-ons/support-case`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TSupportCase[]>;
  return res;
};

export const useGetExtraStorages = () => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SUPPORT_CASES],
    () => getData(),
    {}
  );

  return queryData;
};
