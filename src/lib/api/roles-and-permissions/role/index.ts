import { useQuery } from "react-query";

import { IPaginationProps, TApiResponseWithPagination } from "lib/api/types";
import httpClient from "lib/http";
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_OFFSET } from "constants";
import { TRole } from "./get-role";

type IGetDataProps = Partial<{
  pagination: IPaginationProps;
  search: string;
}>;

export const QUERY_KEY_FOR_COUNTRIES = "countries";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<
  TApiResponseWithPagination<
    Pick<TRole, "id" | "name" | "label" | "createdAt" | "updatedAt">
  >
> => {
  const url = `/permission/role`;
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
  const res = response.data as TApiResponseWithPagination<
    Pick<TRole, "id" | "name" | "label" | "createdAt" | "updatedAt">
  >;
  return res;
};

export const useGetRoles = (props: IGetDataProps = {}) => {
  const { pagination, search } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_COUNTRIES, pagination, search],
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
