import { useQuery } from "react-query";

import { IPaginationProps, TApiResponseWithPagination } from "lib/api/types";
import httpClient from "lib/http";
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_OFFSET } from "constants";
import { TBillingCycle, TModule } from "types";
import { TScheduledRenewal } from "./get-scheduled-renewal";

type IGetDataProps = {
  pagination?: IPaginationProps;
  duration: {
    startDate: string;
    endDate: string;
  };
  billingCycle?: TBillingCycle;
  modules?: TModule[];
  countryIds?: number[];
  industryIds?: number[];
};

export const QUERY_KEY_FOR_SCHEDULED_RENEWAL = "scheduled-renewal";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponseWithPagination<TScheduledRenewal>> => {
  const url = `/finance/scheduled-renewal/`;
  const pagination = props?.data?.pagination;
  const limit = pagination?.limit ?? DEFAULT_PAGE_LIMIT;
  const offset = pagination?.offset ?? DEFAULT_PAGE_OFFSET;

  const config = {
    params: {
      limit,
      offset,
      billingCycle: props.data?.billingCycle,
      startDate: props.data?.duration?.startDate,
      endDate: props.data?.duration?.endDate,
      countryIds: props.data?.countryIds?.join(","),
      industryIds: props.data?.industryIds?.join(","),
      modules: props.data?.modules?.join(","),
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponseWithPagination<TScheduledRenewal>;
  return res;
};

export const useGetTransactionHistory = (props: IGetDataProps) => {
  const {
    pagination,
    duration,
    billingCycle,
    countryIds,
    industryIds,
    modules,
  } = props;
  const queryData = useQuery(
    [
      QUERY_KEY_FOR_SCHEDULED_RENEWAL,
      pagination,
      duration,
      billingCycle,
      countryIds,
      industryIds,
      modules,
    ],
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
