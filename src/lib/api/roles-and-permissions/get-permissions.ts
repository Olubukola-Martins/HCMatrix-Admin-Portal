import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

export const QUERY_KEY_FOR_PERMISSIONS = "permissions";

const getData = async (): Promise<TApiResponse<PermissionListData[]>> => {
  const url = `/permission`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<PermissionListData[]>;
  return res;
};

export const useGetPermissions = () => {
  const queryData = useQuery([QUERY_KEY_FOR_PERMISSIONS], () => getData(), {});

  return queryData;
};

interface PermissionListData {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  permissions: TPermission[];
}
export type TPermissionLabel =
  | "manage-roles-and-permissions"
  | "manage-users"
  | "manage-subscription-prices"
  | "manage-discounts"
  | "view-finance-metrics"
  | "view-training-sessions";
export type TPermission = {
  id: number;
  name: string;
  label: TPermissionLabel; //TODO: Update Permission Label type, after consulting with backend
  categoryId: number;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};
