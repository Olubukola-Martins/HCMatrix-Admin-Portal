import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { TCurrency } from "types";
import { QUERY_KEY_FOR_SUBSCRIPTIONS } from "..";

export type TUpdateUnlicensedPricesInput = {
  prices: Price[];
};

interface Price {
  type: TCurrency;
  monthlyPricePerUnlicensedEmployee: number;
  yearlyPricePerUnlicensedEmployee: number;
}
const createData = async (props: {
  data: TUpdateUnlicensedPricesInput;
}): Promise<TApiResponse<null>> => {
  const url = `/subscription/price/unlicensed`;

  const data: TUpdateUnlicensedPricesInput = {
    ...props.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useUpdateUnLicensedPrices = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TUpdateUnlicensedPricesInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_FOR_SUBSCRIPTIONS);
      },
    }
  );
};
