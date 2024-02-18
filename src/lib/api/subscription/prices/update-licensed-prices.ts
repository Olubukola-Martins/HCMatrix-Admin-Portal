import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TApiResponse } from "../../types";
import { TCurrency } from "types";
import { QUERY_KEY_FOR_SUBSCRIPTIONS } from "..";

export type TUpdateLicensedPricesInput = {
  prices: Price[];
};

interface Price {
  subscriptionId: number;
  type: TCurrency;
  monthlyPricePerLicensedEmployee: number;
  yearlyPricePerLicensedEmployee: number;
}
const createData = async (props: {
  data: TUpdateLicensedPricesInput;
}): Promise<TApiResponse<null>> => {
  const url = `/subscription/price/licensed`;

  const data: TUpdateLicensedPricesInput = {
    ...props.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<null>;
  return res;
};
export const useUpdateLicensedPrices = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TUpdateLicensedPricesInput) => createData({ data: props }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_SUBSCRIPTIONS]);
      },
    }
  );
};
