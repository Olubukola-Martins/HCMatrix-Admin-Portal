import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

export const QUERY_KEY_FOR_PERMISSIONS = "permissions";

const getData = async (): Promise<TApiResponse<TPermission[]>> => {
  const url = `/permission`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TPermission[]>;
  return res;
};

export const useGetPermissions = () => {
  const queryData = useQuery([QUERY_KEY_FOR_PERMISSIONS], () => getData(), {});

  return queryData;
};

export type TPermission = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  permissions: Permission[];
};

interface Permission {
  id: number;
  name: string;
  label: string; //TODO: Create a Permission Label type, after consulting with backend
  categoryId: number;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
}
