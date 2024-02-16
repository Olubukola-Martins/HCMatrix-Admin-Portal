import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TSubscription } from ".";

export const QUERY_KEY_FOR_SINGLE_SUBSCRIPTION = "single-tax-report";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TSubscription>> => {
  const url = `/subscription/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TSubscription>;
  return res;
};

export const useGetSingleSubscription = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_SUBSCRIPTION, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};
