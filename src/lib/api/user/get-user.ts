import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

export const QUERY_KEY_FOR_SINGLE_USER = "single-user";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TUser[]>> => {
  const url = `/user/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TUser[]>;
  return res;
};

export const useGetSingleUser = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_USER, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TUser = {
  id: number;
  userId: number;
  roleId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  user: User;
  role: Role;
};

interface Role {
  id: number;
  name: string;
  label: string;
  createdAt: string;
  updatedAt: string;
}

interface User {
  email: string;
}
