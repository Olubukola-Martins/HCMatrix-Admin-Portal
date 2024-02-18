import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../../types";
import { TTrainingSession } from "./get-training-session";
import { QUERY_KEY_FOR_TRAINING_SESSIONS } from ".";

export type TCreateTrainingSessionInput = {
  name: string;
  description: string;
  numberOfHours: number;
  priceInNgn: number;
  priceInUsd: number;
};
const createData = async (props: {
  data: TCreateTrainingSessionInput;
}): Promise<TApiResponse<TTrainingSession | null>> => {
  const url = `/subscription/add-ons/training-session`;

  const data: TCreateTrainingSessionInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TTrainingSession>;
  return res;
};
export const useCreateTrainingSession = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TCreateTrainingSessionInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_TRAINING_SESSIONS]);
      },
    }
  );
};
