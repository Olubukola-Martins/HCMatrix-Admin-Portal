import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { TCreateRoleInput } from "./create-role";
import { QUERY_KEY_FOR_ROLES } from ".";

export type TUpdateRoleInput = {
  id: number;
  data: TCreateRoleInput;
};
const createData = async (props: {
  data: TUpdateRoleInput;
}): Promise<TApiResponse<null>> => {
  const url = `/permission/role/${props.data.id}`;

  const data: TUpdateRoleInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.put(url, data);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useUpdateRole = () => {
  const queryClient = useQueryClient();
  return useMutation((props: TUpdateRoleInput) => createData({ data: props }), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_FOR_ROLES]);
    },
  });
};
