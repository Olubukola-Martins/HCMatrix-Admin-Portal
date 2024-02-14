import { useQuery } from "react-query";
import { TCurrency } from "types";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

type IGetDataProps = {
  duration: {
    startDate: string;
    endDate: string;
  };
  priceType: TCurrency;
  countryIds?: number[];
};

export const QUERY_KEY_FOR_INCOME_PER_ADDON = "income-per-addon";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponse<TIncomePerAddOn>> => {
  const url = `/finance/analytic/income/per/add-ons`;

  const config = {
    params: {
      startDate: props.data?.duration?.startDate,
      endDate: props.data?.duration?.endDate,
      priceType: props.data?.priceType,
      countryIds: props.data?.countryIds?.join(","),
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponse<TIncomePerAddOn>;
  return res;
};

export const useGetIncomePerAddOn = (props: IGetDataProps) => {
  const { countryIds, duration, priceType } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_INCOME_PER_ADDON, countryIds, duration, priceType],
    () =>
      getData({
        data: {
          ...props,
        },
      }),
    {}
  );

  return queryData;
};

export type TIncomePerAddOn = {
  totalSum: number;
  percentages: Percentages;
};

type Percentages = Record<string, number | string>;
