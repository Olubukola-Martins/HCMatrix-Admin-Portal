import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../../types";
import { TCreateSupportCaseInput } from "./create-support-case";
import { TSupportCase } from "./get-support-case";

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
  return useMutation((props: TUpdateSupportCaseInput) =>
    createData({ data: props })
  );
};
