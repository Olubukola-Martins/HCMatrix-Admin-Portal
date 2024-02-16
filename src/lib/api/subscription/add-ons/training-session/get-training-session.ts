import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

export const QUERY_KEY_FOR_SINGLE_TRAINING_SESSION = "single-training-session";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TTrainingSession>> => {
  const url = `/subscription/add-ons/training-session/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TTrainingSession>;
  return res;
};

export const useGetSingleTrainingSession = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_TRAINING_SESSION, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TTrainingSession = {
  id: number;
  name: string;
  label: string;
  description: string;
  numberOfHours: number;
  priceInNgn: string;
  priceInUsd: string;
  createdAt: string;
  updatedAt: string;
};
