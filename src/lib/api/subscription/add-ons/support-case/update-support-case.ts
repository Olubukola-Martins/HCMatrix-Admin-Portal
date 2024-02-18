import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../../types";
import { TCreateSupportCaseInput } from "./create-support-case";
import { TSupportCase } from "./get-support-case";
import { QUERY_KEY_FOR_SUPPORT_CASES } from ".";

export type TUpdateSupportCaseInput = {
  id: number;
  data: Partial<TCreateSupportCaseInput>;
};
const createData = async (props: {
  data: TUpdateSupportCaseInput;
}): Promise<TApiResponse<TSupportCase | null>> => {
  const url = `/subscription/add-ons/support-case/${props.data.id}`;

  const data: TUpdateSupportCaseInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<TSupportCase>;
  return res;
};
export const useUpdateSupportCase = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TUpdateSupportCaseInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_SUPPORT_CASES]);
      },
    }
  );
};
