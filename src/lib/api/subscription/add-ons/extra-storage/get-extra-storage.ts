import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

export const QUERY_KEY_FOR_SINGLE_EXTRA_STORAGE = "single-extra-storage";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TExtraStorage>> => {
  const url = `/subscription/add-ons/extra-storage/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TExtraStorage>;
  return res;
};

export const useGetSingleExtraStorage = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_EXTRA_STORAGE, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TExtraStorage = {
  id: number;
  name: string;
  label: string;
  description: string;
  size: string;
  priceInNgn: string;
  priceInUsd: string;
  createdAt: string;
  updatedAt: string;
};
