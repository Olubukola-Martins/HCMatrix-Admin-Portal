import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { QUERY_KEY_FOR_DISCOUNTS, TDiscount } from ".";

export type TCreateDiscountInput = {
  companyId: number;
  type: string;
  value: number;
  startDate: string;
  endDate: string;
};
const createData = async (props: {
  data: TCreateDiscountInput;
}): Promise<TApiResponse<Omit<TDiscount, "company"> | null>> => {
  const url = `/subscription/discount`;

  const data: TCreateDiscountInput = {
    ...props.data,
  };

  const response = await httpClient.post(url, data);
  const res = response.data as TApiResponse<Omit<TDiscount, "company">>;
  return res;
};
export const useCreateDiscount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TCreateDiscountInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_DISCOUNTS]);
      },
    }
  );
};
