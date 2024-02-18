import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { QUERY_KEY_FOR_ROLES } from ".";

export type TCreateRoleInput = {
  name: string;
  permissionIds?: number[];
};
const createData = async (props: {
  data: TCreateRoleInput;
}): Promise<TApiResponse<TCreateRoleData | null>> => {
  const url = `/permission/role`;

  const data: TCreateRoleInput = {
    ...props.data,
    permissionIds: props.data.permissionIds || [],
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TCreateRoleData>;
  return res;
};
export const useCreateRole = () => {
  const queryClient = useQueryClient();
  return useMutation((props: TCreateRoleInput) => createData({ data: props }), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_FOR_ROLES]);
    },
  });
};

export type TCreateRoleData = {
  id: number;
  name: string;
  label: string;
  isForAdmin: boolean;
  updatedAt: string;
  createdAt: string;
};
