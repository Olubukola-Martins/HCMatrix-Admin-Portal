import { useQuery } from "react-query";

import { IPaginationProps, TApiResponseWithPagination } from "lib/api/types";
import httpClient from "lib/http";
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_OFFSET } from "constants";
import { TTrainingSessionBooking } from "./get-booking";
import { TCompany } from "lib/api/company";
import { TTrainingSession } from "../get-training-session";
import { TDuration, TOrderBy } from "types";

type IGetDataProps = Partial<{
  pagination: IPaginationProps;
  search: string;
  orderBy: TOrderBy;
  duration: TDuration;
}>;

export const QUERY_KEY_FOR_TRAINING_SESSION_BOOKINGS =
  "training-session-bookings";

type TResponseData = Omit<
  TTrainingSessionBooking,
  "company" | "trainingSession"
> & {
  company: Pick<TCompany, "id" | "name">;
  trainingSession: Pick<TTrainingSession, "id" | "name">;
};
const getData = async (
  props: {
    data?: IGetDataProps;
  } = {}
): Promise<TApiResponseWithPagination<TResponseData>> => {
  const url = `/subscription/add-ons/training-session/booking`;
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
  const res = response.data as TApiResponseWithPagination<TResponseData>;
  return res;
};

export const useGetTrainingSessionBookings = (props: IGetDataProps = {}) => {
  const { pagination, search } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_TRAINING_SESSION_BOOKINGS, pagination, search],
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
