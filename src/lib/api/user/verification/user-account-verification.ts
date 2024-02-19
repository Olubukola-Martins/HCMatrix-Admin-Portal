import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../types";
import { TLoginResponseData } from "lib/api/auth/login";

export type TVerifyAccountInput = {
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
  data: TVerifyAccountInput;
}): Promise<TApiResponse<TLoginResponseData | null>> => {
  const url = `/user/verify`;

  const data: TVerifyAccountInput["data"] = {
    ...props.data["data"],
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
export const useVerifyAccountAndSetPassword = () => {
  return useMutation((props: TVerifyAccountInput) =>
    createData({ data: props })
  );
};
