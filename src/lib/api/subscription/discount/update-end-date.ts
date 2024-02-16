import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../types";
import { TDiscount } from ".";

export type TUpdateDiscountEndDateInput = {
  id: number;
  data: {
    endDate: string;
  };
};
const createData = async (props: {
  data: TUpdateDiscountEndDateInput;
}): Promise<TApiResponse<TDiscount | null>> => {
  const url = `/subscription/discount/${props.data.id}`;

  const data: TUpdateDiscountEndDateInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<TDiscount>;
  return res;
};
export const useUpdateDiscountEndDate = () => {
  return useMutation((props: TUpdateDiscountEndDateInput) =>
    createData({ data: props })
  );
};
