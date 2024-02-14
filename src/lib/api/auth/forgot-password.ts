import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../types";

export type TForgotPasswordInput = {
  email: string;
};
const createData = async (props: {
  data: TForgotPasswordInput;
}): Promise<TApiResponse<null>> => {
  const url = `/auth/forgot-password`;

  const data: TForgotPasswordInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useForgotPassword = () => {
  return useMutation((props: TForgotPasswordInput) =>
    createData({ data: props })
  );
};
