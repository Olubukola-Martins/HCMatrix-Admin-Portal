import { Card, Typography, DatePicker, Skeleton } from "antd";
import DoughnutChartWithExternalLabels from "components/charts/modified/DoughnutChartWithExternalLabels";
import {
  DEFAULT_START_DATE,
  DEFAULT_END_DATE,
  DEFAULT_DATE_FORMAT,
} from "constants";
import dayjs, { Dayjs } from "dayjs";
import { useGetTrainingSessionAnalytics } from "lib/api/subscription/add-ons/training-session/analytics";
import { generateHexColor } from "lib/utils";
import React, { useState } from "react";
import { IDivProps } from "types";

const TrainingAnalyticsCard: React.FC<IDivProps> = ({ className }) => {
  const [duration, setDuration] = useState<[Dayjs, Dayjs]>([
    dayjs(DEFAULT_START_DATE),
    dayjs(DEFAULT_END_DATE),
  ]);
  const { data, isLoading } = useGetTrainingSessionAnalytics({
    duration: {
      startDate: duration?.[0].format(DEFAULT_DATE_FORMAT),
      endDate: duration?.[1].format(DEFAULT_DATE_FORMAT),
    },
  });
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light capitalize">Trainings</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <DatePicker.RangePicker
              placeholder={["From", "To"]}
              value={duration}
              onChange={(vals) =>
                vals &&
                vals?.length >= 2 &&
                vals[0] &&
                vals[1] &&
                setDuration([vals[0], vals[1]])
              }
            />
          </div>
        </div>
      }
      bordered={false}
    >
      <Skeleton loading={isLoading} paragraph={{ rows: 4 }}>
        <DoughnutChartWithExternalLabels
          dataValues={Object.values(data?.data.percentages ?? {}).map(
            (item) => (+item / 100) * (data?.data.totalCount ?? 0)
          )}
          dataEntityLabel="Amount"
          externalLabels={Object.keys(data?.data.percentages ?? {}).map(
            (item) => ({
              value: item,
              color: generateHexColor(item),
            })
          )}
          className="lg:h-64 flex lg:flex-row flex-col items-center"
        />
      </Skeleton>
    </Card>
  );
};

export default TrainingAnalyticsCard;
