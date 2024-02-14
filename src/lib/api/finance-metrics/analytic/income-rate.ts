import { useQuery } from "react-query";
import { TCurrency, TModule } from "types";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

type IGetDataProps = {
  duration: {
    startDate: string;
    endDate: string;
  };
  priceType: TCurrency;
  countryIds?: number[];
  modules?: TModule[];
};

export const QUERY_KEY_FOR_INCOME_PER_RATE = "income-per-rate";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponse<TIncomePerRate>> => {
  const url = `/finance/analytic/income/rate`;

  const config = {
    params: {
      startDate: props.data?.duration?.startDate,
      endDate: props.data?.duration?.endDate,
      priceType: props.data?.priceType,
      countryIds: props.data?.countryIds?.join(","),
      modules: props.data?.modules?.join(","),
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponse<TIncomePerRate>;
  return res;
};

export const useGetIncomeRate = (props: IGetDataProps) => {
  const { countryIds, duration, priceType, modules } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_INCOME_PER_RATE, countryIds, duration, priceType, modules],
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

export type TIncomePerRate = Record<string, number | string>;
