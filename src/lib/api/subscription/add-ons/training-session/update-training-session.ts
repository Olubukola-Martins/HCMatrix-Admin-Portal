import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../../types";
import { TCreateTrainingSessionInput } from "./create-training-session";
import { TTrainingSession } from "./get-training-session";
import { QUERY_KEY_FOR_TRAINING_SESSIONS } from ".";

export type TUpdateTrainingSessionInput = {
  id: number;
  data: Partial<TCreateTrainingSessionInput>;
};
const createData = async (props: {
  data: TUpdateTrainingSessionInput;
}): Promise<TApiResponse<TTrainingSession | null>> => {
  const url = `/subscription/add-ons/training-session/${props.data.id}`;

  const data: TUpdateTrainingSessionInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<TTrainingSession>;
  return res;
};
export const useUpdateTrainingSession = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TUpdateTrainingSessionInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_TRAINING_SESSIONS]);
      },
    }
  );
};
