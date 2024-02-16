import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../../types";
import { TExtraStorage } from "./get-extra-storage";
import { TCreateExtraStorageInput } from "./create-extra-storage";

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
  return useMutation((props: TUpdateExtraStorageInput) =>
    createData({ data: props })
  );
};
