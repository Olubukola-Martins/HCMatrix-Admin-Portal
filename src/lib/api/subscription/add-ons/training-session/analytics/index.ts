import { useQuery } from "react-query";
import { TDuration } from "types";

import { TApiResponse } from "lib/api/types";
import httpClient from "lib/http";

type IGetDataProps = {
  duration: TDuration;
};

export const QUERY_KEY_FOR_TRAINING_SESSION_ANALYTICS =
  "training-session-analytics";

const getData = async (props: {
  data: IGetDataProps;
}): Promise<TApiResponse<TTrainingSessionAnalytics>> => {
  const url = `/subscription/add-ons/training-session/analytic`;

  const config = {
    params: {
      startDate: props.data?.duration?.startDate,
      endDate: props.data?.duration?.endDate,
    },
  };

  const response = await httpClient.get(url, config);
  const res = response.data as TApiResponse<TTrainingSessionAnalytics>;
  return res;
};

export const useGetTrainingSessionAnalytics = (props: IGetDataProps) => {
  const { duration } = props;
  const queryData = useQuery(
    [QUERY_KEY_FOR_TRAINING_SESSION_ANALYTICS, duration],
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

export type TTrainingSessionAnalytics = {
  totalCount: number;
  percentages: Percentages;
};

type Percentages = Record<string, number | string>;
