import { useQuery } from "react-query";

import { IPaginationProps, TApiResponseWithPagination } from "lib/api/types";
import httpClient from "lib/http";
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_OFFSET } from "constants";
import { TBillingCycle, TDuration } from "types";
import { TTaxReport } from "./get-tax-report";

type IGetDataProps = {
  pagination?: IPaginationProps;
  duration: TDuration;
  billingCycle?: TBillingCycle;
  countryIds?: number[];
  industryIds?: number[];
};

export const QUERY_KEY_FOR_TAX_REPORTS = "tax-reports";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponseWithPagination<TTaxReport>> => {
  const url = `/finance/tax-report`;
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
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponseWithPagination<TTaxReport>;
  return res;
};

export const useGetTaxReport = (props: IGetDataProps) => {
  const { pagination, duration, billingCycle, countryIds, industryIds } = props;
  const queryData = useQuery(
    [
      QUERY_KEY_FOR_TAX_REPORTS,
      pagination,
      duration,
      billingCycle,
      countryIds,
      industryIds,
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
