import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TUser, TUserAuthData } from "./types";
import { TApiResponse } from "../types";

export type TLoginInput = {
  email: string;
  password: string;
};
const createData = async (props: {
  data: TLoginInput;
}): Promise<TApiResponse<Data | null>> => {
  const url = `/auth`;

  const data: TLoginInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<Data>;
  return res;
};
export const useLogin = () => {
  return useMutation((props: TLoginInput) => createData({ data: props }));
};

interface Data {
  user: TUser;
  payload: TUserAuthData;
  accessToken: string;
}
