import { useQuery } from "react-query";
import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TCompany } from "lib/api/company";
import { TTrainingSession } from "../get-training-session";
import { TBookingStatus } from "types";

export const QUERY_KEY_FOR_SINGLE_TRAINING_SESSION_BOOKING =
  "single-training-session-booking";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TTrainingSessionBooking>> => {
  const url = `/subscription/add-ons/training-session/booking/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TTrainingSessionBooking>;
  return res;
};

export const useGetSingleTrainingSessionBooking = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_TRAINING_SESSION_BOOKING, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};
export type TTrainingSessionBooking = {
  id: number;
  companyId: number;
  trainingSessionId: number;
  status: TBookingStatus;
  reason?: string | null;
  startDate: string;
  endDate: string;
  suggestedDates: { startDate: string; endDate: string }[] | null;
  createdAt: string;
  updatedAt: string;
  company: TCompany;
  trainingSession: TTrainingSession;
};
