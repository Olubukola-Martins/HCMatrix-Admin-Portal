import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { QUERY_KEY_FOR_VAT, TVat } from "./get-vat";

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
  const res = response.data as TApiResponse<TVat | null>;
  return res;
};
export const useHandleVat = () => {
  const queryClient = useQueryClient();
  return useMutation((props: THandleVatInput) => createData({ data: props }), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_FOR_VAT]);
    },
  });
};
