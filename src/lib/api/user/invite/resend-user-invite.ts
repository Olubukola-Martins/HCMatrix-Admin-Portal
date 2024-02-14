import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { useMutation } from "react-query";

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
  return useMutation((props: TResendUserInviteInput) =>
    createData({ data: props })
  );
};
