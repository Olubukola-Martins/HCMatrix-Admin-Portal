import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../types";
import { TCreateUserInput } from "./create-user";

export type TUpdateUserInput = {
  id: number;
  data: Omit<TCreateUserInput, "email">;
};
const createData = async (props: {
  data: TUpdateUserInput;
}): Promise<TApiResponse<null>> => {
  const url = `/user/${props.data.id}`;

  const data: TUpdateUserInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useUpdateUser = () => {
  return useMutation((props: TUpdateUserInput) => createData({ data: props }));
};
