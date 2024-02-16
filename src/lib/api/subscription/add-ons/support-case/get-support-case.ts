import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

export const QUERY_KEY_FOR_SINGLE_SUPPORT_CASE = "single-support-case";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TSupportCase>> => {
  const url = `/subscription/add-ons/support-case/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TSupportCase>;
  return res;
};

export const useGetSingleSupportCase = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_SUPPORT_CASE, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TSupportCase = {
  id: number;
  name: string;
  label: string;
  description: string;
  priceInNgn: string;
  priceInUsd: string;
  createdAt: string;
  updatedAt: string;
};
