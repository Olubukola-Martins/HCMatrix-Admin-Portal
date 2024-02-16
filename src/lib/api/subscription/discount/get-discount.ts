import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TDiscount } from ".";

export const QUERY_KEY_FOR_SINGLE_DISCOUNT = "single-discount";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TDiscount>> => {
  const url = `/subscription/discount/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TDiscount>;
  return res;
};

export const useGetSingleDiscount = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_DISCOUNT, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};
