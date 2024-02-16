import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../types";
import { TVat } from "./get-vat";

export type THandleVatInput = {
  value: number;
};
const createData = async (props: {
  data: THandleVatInput;
}): Promise<TApiResponse<TVat | null>> => {
  const url = `/subscription/vat`;

  const data: THandleVatInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TVat>;
  return res;
};
export const useHandleVat = () => {
  return useMutation((props: THandleVatInput) => createData({ data: props }));
};
