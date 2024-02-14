import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TLoginResponseData } from "../login";

export const QUERY_KEY_FOR_AUTH_USER_PROFILE = "authenticated-user-profile";

type TProfileResponseData = Pick<TLoginResponseData, "payload" | "user">;
const getData = async (): Promise<TApiResponse<TProfileResponseData>> => {
  const url = `/auth/me`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TProfileResponseData>;
  return res;
};

export const useGetAuthUserProfile = () => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_AUTH_USER_PROFILE],
    () => getData(),
    {}
  );

  return queryData;
};
