import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../types";

export type TCreateRoleInput = {
  name: string;
  permissionIds: number[];
};
const createData = async (props: {
  data: TCreateRoleInput;
}): Promise<TApiResponse<TCreateRoleData | null>> => {
  const url = `/permission/role`;

  const data: TCreateRoleInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TCreateRoleData>;
  return res;
};
export const useCreateRole = () => {
  return useMutation((props: TCreateRoleInput) => createData({ data: props }));
};

export type TCreateRoleData = {
  id: number;
  name: string;
  label: string;
  isForAdmin: boolean;
  updatedAt: string;
  createdAt: string;
};
