import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TTrainingSession } from "./get-training-session";

export const QUERY_KEY_FOR_TRAINING_SESSIONS = "training-sessions";

const getData = async (): Promise<TApiResponse<TTrainingSession[]>> => {
  const url = `/subscription/add-ons/training-session`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TTrainingSession[]>;
  return res;
};

export const useGetTrainingSessions = () => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_TRAINING_SESSIONS],
    () => getData(),
    {}
  );

  return queryData;
};
