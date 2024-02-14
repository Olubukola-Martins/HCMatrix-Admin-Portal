import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TPermission } from "../get-permissions";

export const QUERY_KEY_FOR_SINGLE_ROLE = "single-role";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TRole[]>> => {
  const url = `/permission/role/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TRole[]>;
  return res;
};

export const useGetSingleRole = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_ROLE, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TRole = {
  id: number;
  name: string;
  label: string;
  createdAt: string;
  updatedAt: string;
  permissions: TPermission[];
};
