import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../../types";
import { TSupportCase } from "./get-support-case";
import { QUERY_KEY_FOR_SUPPORT_CASES } from ".";

export type TCreateSupportCaseInput = {
  name: string;
  description: string;
  priceInNgn: number;
  priceInUsd: number;
};
const createData = async (props: {
  data: TCreateSupportCaseInput;
}): Promise<TApiResponse<TSupportCase | null>> => {
  const url = `/subscription/add-ons/support-case`;

  const data: TCreateSupportCaseInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TSupportCase>;
  return res;
};
export const useCreateSupportCase = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TCreateSupportCaseInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_SUPPORT_CASES]);
      },
    }
  );
};
