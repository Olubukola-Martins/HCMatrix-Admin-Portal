import { useQuery } from "react-query";

import { IPaginationProps, TApiResponseWithPagination } from "lib/api/types";
import httpClient from "lib/http";
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_OFFSET } from "constants";
import { TBillingCycle, TCurrency, TDuration, TModule } from "types";

type IGetDataProps = {
  pagination?: IPaginationProps;
  duration: TDuration;
  billingCycle?: TBillingCycle;
  modules?: TModule[];
  countryIds?: number[];
  industryIds?: number[];
};

export const QUERY_KEY_FOR_TRANSACTION_HISTORY = "transaction-histories";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponseWithPagination<TTransactionHistory>> => {
  const url = `/finance/transaction-history`;
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
  const res = response.data as TApiResponseWithPagination<TTransactionHistory>;
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
      QUERY_KEY_FOR_TRANSACTION_HISTORY,
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

export type TTransactionHistory = {
  id: number;
  companyId: number;
  isActive: boolean;
  isFreeTrial: boolean;
  autoRenew: boolean;
  billingCycle: string;
  priceType: TCurrency;
  startDate: string;
  endDate: string;
  licensedEmployeeCount: number;
  unlicensedEmployeeCount: number;
  deactivatedEmployeeCount: number;
  createdAt: string;
  updatedAt: string;
  company: Company;
  transaction: Transaction;
  purchased: Purchased[];
};

interface Purchased {
  id: number;
  companySubscriptionId: number;
  subscriptionId: number;
  createdAt: string;
  updatedAt: string;
  subscription: Subscription;
}

interface Subscription {
  id: number;
  type: string;
  name: string;
  label: string;
  iconUrl?: string | null;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

interface Transaction {
  id: number;
  companySubscriptionId: number;
  vat: string;
  discount: string;
  totalAmount: string;
  totalAmountPaid: string;
  status: string;
  reference: string;
  createdAt: string;
  updatedAt: string;
}

interface Company {
  id: number;
  name: string;
  logoUrl: string;
  addressId: number;
  industryId: number;
}
