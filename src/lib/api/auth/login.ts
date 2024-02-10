import { ENV } from "constants";
import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TUser, TUserAuthData } from "./types";

type TData = {
  email: string;
  password: string;
};
const createData = async (props: { data: TData }): Promise<TLoginResponse> => {
  const url = `${ENV.API_BASE_URL}/auth`;

  const data: TData = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TLoginResponse;
  return res;
};
export const useLogin = () => {
  return useMutation((props: TData) => createData({ data: props }));
};

type TLoginResponse = {
  message: string;
  data: Data;
};

interface Data {
  user: TUser;
  payload: TUserAuthData;
  accessToken: string;
}
