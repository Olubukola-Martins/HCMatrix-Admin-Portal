import { useQuery } from "react-query";
import { TCurrency, TDuration } from "types";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

type IGetDataProps = {
  duration: TDuration;
  priceType: TCurrency;
  countryIds?: number[];
};

export const QUERY_KEY_FOR_INCOME_PER_MODULE = "income-per-module";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponse<TIncomePerModule>> => {
  const url = `/finance/analytic/income/per/module`;

  const config = {
    params: {
      startDate: props.data?.duration?.startDate,
      endDate: props.data?.duration?.endDate,
      priceType: props.data?.priceType,
      countryIds: props.data?.countryIds?.join(","),
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponse<TIncomePerModule>;
  return res;
};

export const useGetIncomePerModule = (props: IGetDataProps) => {
  const { countryIds, duration, priceType } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_INCOME_PER_MODULE, countryIds, duration, priceType],
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

export type TIncomePerModule = {
  totalSum: number;
  percentages: Percentages;
};

type Percentages = Record<string, number | string>;
