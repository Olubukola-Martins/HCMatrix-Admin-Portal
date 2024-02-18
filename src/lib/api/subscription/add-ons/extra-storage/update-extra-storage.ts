import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../../types";
import { TExtraStorage } from "./get-extra-storage";
import { TCreateExtraStorageInput } from "./create-extra-storage";
import { QUERY_KEY_FOR_EXTRA_STORAGES } from ".";

export type TUpdateExtraStorageInput = {
  id: number;
  data: Partial<TCreateExtraStorageInput>;
};
const createData = async (props: {
  data: TUpdateExtraStorageInput;
}): Promise<TApiResponse<TExtraStorage | null>> => {
  const url = `/subscription/add-ons/extra-storage/${props.data.id}`;

  const data: TUpdateExtraStorageInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<TExtraStorage>;
  return res;
};
export const useUpdateExtraStorage = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (props: TUpdateExtraStorageInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_EXTRA_STORAGES]);
      },
    }
  );
};
