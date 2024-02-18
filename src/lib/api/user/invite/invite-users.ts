import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { QUERY_KEY_FOR_USER_INVITES, TUserInvite } from ".";

export type TInviteUserInput = {
  emails: string[];
};
const createData = async (props: {
  data: TInviteUserInput;
}): Promise<TApiResponse<TUserInvite[]>> => {
  const url = `/user/invite`;

  const data: TInviteUserInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TUserInvite[]>;
  return res;
};
export const useInviteUsers = () => {
  const queryClient = useQueryClient();
  return useMutation((props: TInviteUserInput) => createData({ data: props }), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_FOR_USER_INVITES]);
    },
  });
};
