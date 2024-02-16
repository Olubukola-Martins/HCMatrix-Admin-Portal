import { useQuery } from "react-query";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TCurrency, TSubscriptionLabel, TSubscriptionType } from "types";

type IGetDataProps = Partial<{
  priceType: TCurrency;
  type: TSubscriptionType;
}>;

export const QUERY_KEY_FOR_SUBSCRIPTIONS = "subscriptions";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponse<TSubscription[]>> => {
  const url = `/subscription`;

  const config = {
    params: {
      priceType: props.data?.priceType,
      type: props.data?.type,
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponse<TSubscription[]>;
  return res;
};

export const useGetSubscriptions = (props: IGetDataProps = {}) => {
  const { priceType, type } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_SUBSCRIPTIONS, priceType, type],
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

export type TSubscription = {
  id: number;
  type: TSubscriptionType;
  name: string;
  label: TSubscriptionLabel;
  iconUrl?: string | null;
  description: string;
  createdAt: string;
  updatedAt: string;
  prices: Price[];
};

interface Price {
  id: number;
  subscriptionId: number;
  type: TCurrency;
  monthlyPricePerLicensedEmployee: string;
  monthlyPricePerUnlicensedEmployee: string;
  yearlyPricePerLicensedEmployee: string;
  yearlyPricePerUnlicensedEmployee: string;
  createdAt: string;
  updatedAt: string;
}
