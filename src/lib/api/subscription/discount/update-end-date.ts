import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { QUERY_KEY_FOR_DISCOUNTS, TDiscount } from ".";

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

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<TDiscount>;
  return res;
};
export const useUpdateDiscountEndDate = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TUpdateDiscountEndDateInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_DISCOUNTS]);
      },
    }
  );
};
