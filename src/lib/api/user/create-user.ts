import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../types";
import { TUser, TUserAuthPayload } from "../auth/types";
import { QUERY_KEY_FOR_USERS } from ".";

export type TCreateUserInput = {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  roleId: number;
};
const createData = async (props: {
  data: TCreateUserInput;
}): Promise<TApiResponse<TCreateUserData | null>> => {
  const url = `/user`;

  const data: TCreateUserInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TCreateUserData>;
  return res;
};
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation((props: TCreateUserInput) => createData({ data: props }), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_FOR_USERS]);
    },
  });
};

export type TCreateUserData = Omit<TUserAuthPayload, "role"> & { user: TUser };
