import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../types";

export type TChangePasswordInput = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};
const createData = async (props: {
  data: TChangePasswordInput;
}): Promise<TApiResponse<null>> => {
  const url = `/auth/me/change-password`;

  const data: TChangePasswordInput = {
    ...props.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useChangePassword = () => {
  return useMutation((props: TChangePasswordInput) =>
    createData({ data: props })
  );
};
