import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../../types";
import { TExtraStorage } from "./get-extra-storage";
import { TStorageUnit } from "types";
import { QUERY_KEY_FOR_EXTRA_STORAGES } from ".";

export type TCreateExtraStorageInput = {
  name: string;
  description: string;
  size: number;
  unit: TStorageUnit;
  priceInNgn: number;
  priceInUsd: number;
};
const createData = async (props: {
  data: TCreateExtraStorageInput;
}): Promise<TApiResponse<TExtraStorage | null>> => {
  const url = `/subscription/add-ons/extra-storage`;

  const data: TCreateExtraStorageInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TExtraStorage>;
  return res;
};
export const useCreateExtraStorage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TCreateExtraStorageInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_EXTRA_STORAGES]);
      },
    }
  );
};
