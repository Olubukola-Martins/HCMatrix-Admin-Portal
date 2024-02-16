import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../types";
import { TCurrency } from "types";

export type TUpdateUnlicensedPricesInput = {
  prices: Price[];
};

interface Price {
  type: TCurrency;
  monthlyPricePerLicensedEmployee: number;
  yearlyPricePerLicensedEmployee: number;
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
  return useMutation((props: TUpdateUnlicensedPricesInput) =>
    createData({ data: props })
  );
};
