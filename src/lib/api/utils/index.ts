import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../types";

export enum EENTITY_TO_BE_DELETED {
  DISCOUNT = "/subscription/discount",
  ROLE = "/permission/role",
  USER = "/user",
}
type TData = {
  id: number;
  enitity: EENTITY_TO_BE_DELETED;
};
const delData = async (props: { data: TData }): Promise<TApiResponse<null>> => {
  const url = `${props.data.enitity}/${props.data.id}`;

  const response = await httpClient.delete(url);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useDeleteEntity = () => {
  return useMutation((props: TData) => delData({ data: props }));
};
