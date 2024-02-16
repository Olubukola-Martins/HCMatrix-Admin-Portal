import { useQuery } from "react-query";

import { IPaginationProps, TApiResponseWithPagination } from "lib/api/types";
import httpClient from "lib/http";
import { TDiscountType } from "types";
import { TCompany } from "lib/api/company";
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_OFFSET } from "constants";

type IGetDataProps = Partial<{
  pagination: IPaginationProps;
  search: string;
  companyId: number;
  type: TDiscountType;
}>;

export const QUERY_KEY_FOR_DISCOUNTS = "discounts";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponseWithPagination<TDiscount>> => {
  const url = `/subscription/discount`;
  const pagination = props?.data?.pagination;
  const limit = pagination?.limit ?? DEFAULT_PAGE_LIMIT;
  const offset = pagination?.offset ?? DEFAULT_PAGE_OFFSET;
  const search = props.data?.search;
  const config = {
    params: {
      limit,
      offset,
      search,
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponseWithPagination<TDiscount>;
  return res;
};

export const useGetDiscounts = (props: IGetDataProps = {}) => {
  const { companyId, pagination, type, search } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_DISCOUNTS, companyId, pagination, type, search],
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

export type TDiscount = {
  id: number;
  companyId: number;
  type: TDiscountType;
  value: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  company: TCompany;
};
