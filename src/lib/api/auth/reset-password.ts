import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../types";
import { TLoginResponseData } from "./login";

export type TResetPasswordInput = {
  data: {
    password: string;
    confirmPassword: string;
  };
  queryParams: {
    uid: string;
    token: string;
  };
};
const createData = async (props: {
  data: TResetPasswordInput;
}): Promise<TApiResponse<TLoginResponseData | null>> => {
  const url = `/auth/reset-password`;

  const data: TResetPasswordInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.post(url, data, {
    params: {
      uid: props.data.queryParams.uid,
      token: props.data.queryParams.token,
    },
  });
  const res = response.data as TApiResponse<TLoginResponseData | null>;
  return res;
};
export const useResetPassword = () => {
  return useMutation((props: TResetPasswordInput) =>
    createData({ data: props })
  );
};
