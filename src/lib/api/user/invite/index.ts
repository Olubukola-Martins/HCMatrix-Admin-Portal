import { useQuery } from "react-query";
import { IPaginationProps, TApiResponseWithPagination } from "lib/api/types";
import httpClient from "lib/http";
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_OFFSET } from "constants";

type IGetDataProps = Partial<{
  pagination: IPaginationProps;
}>;

export const QUERY_KEY_FOR_USER_INVITES = "user-invites";

const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponseWithPagination<TUserInvite>> => {
  const url = `/user/invite`;
  const pagination = props?.data?.pagination;
  const limit = pagination?.limit ?? DEFAULT_PAGE_LIMIT;
  const offset = pagination?.offset ?? DEFAULT_PAGE_OFFSET;

  const config = {
    params: {
      limit,
      offset,
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponseWithPagination<TUserInvite>;
  return res;
};

export const useGetUserInvites = (props: IGetDataProps = {}) => {
  const { pagination } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_USER_INVITES, pagination],
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

export type TUserInvite = {
  id: number;
  email: string;
  lastSent: string;
  createdAt: string;
  updatedAt: string;
};
