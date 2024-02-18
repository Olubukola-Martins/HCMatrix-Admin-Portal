import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY_FOR_USER_INVITES } from ".";

export type TResendUserInviteInput = {
  id: number;
};
const createData = async (props: {
  data: TResendUserInviteInput;
}): Promise<TApiResponse<null>> => {
  const url = `/user/invite/${props.data.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useResendUserInvite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TResendUserInviteInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_USER_INVITES]);
      },
    }
  );
};
