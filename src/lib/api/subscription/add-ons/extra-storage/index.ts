import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TExtraStorage } from "./get-extra-storage";

export const QUERY_KEY_FOR_EXTRA_STORAGES = "extra-storages";

const getData = async (): Promise<TApiResponse<TExtraStorage[]>> => {
  const url = `/subscription/add-ons/extra-storage`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TExtraStorage[]>;
  return res;
};

export const useGetExtraStorages = () => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_EXTRA_STORAGES],
    () => getData(),
    {}
  );

  return queryData;
};
