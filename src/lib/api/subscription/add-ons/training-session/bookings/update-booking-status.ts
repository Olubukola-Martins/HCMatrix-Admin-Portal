import httpClient from "lib/http";
import { useMutation } from "react-query";
import { TApiResponse } from "../../../../types";
import { TTrainingSessionBooking } from "./get-booking";

export type TUpdateTrainingSessionBookingInput = {
  id: number;
  data: Pick<TTrainingSessionBooking, "status">;
};
const createData = async (props: {
  data: TUpdateTrainingSessionBookingInput;
}): Promise<TApiResponse<TTrainingSessionBooking | null>> => {
  const url = `/subscription/add-ons/training-session/booking/${props.data.id}`;

  const data: TUpdateTrainingSessionBookingInput["data"] = {
    ...props.data.data,
  };

  const response = await httpClient.patch(url, data);
  const res = response.data as TApiResponse<TTrainingSessionBooking>;
  return res;
};
export const useUpdateTrainingSessionBooking = () => {
  return useMutation((props: TUpdateTrainingSessionBookingInput) =>
    createData({ data: props })
  );
};
