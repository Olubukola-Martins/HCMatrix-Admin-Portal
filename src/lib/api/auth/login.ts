import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TUser, TUserAuthPayload } from "./types";
import { TApiResponse } from "../types";

export type TLoginInput = {
  email: string;
  password: string;
};
const createData = async (props: {
  data: TLoginInput;
}): Promise<TApiResponse<TLoginResponseData | null>> => {
  const url = `/auth`;

  const data: TLoginInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TLoginResponseData>;
  return res;
};
export const useLogin = () => {
  return useMutation((props: TLoginInput) => createData({ data: props }));
};

export type TLoginResponseData = {
  user: TUser;
  payload: TUserAuthPayload;
  accessToken: string;
};
