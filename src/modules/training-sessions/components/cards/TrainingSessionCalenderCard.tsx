import { Card, Skeleton } from "antd";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { ErrorBoundary } from "components/error/ErrorBoundary";
import { ErrorWrapper } from "components/error/ErrorWrapper";
import moment from "moment";
import React from "react";
import { IDivProps } from "types";
import { useGetTrainingSessionBookings } from "lib/api/subscription/add-ons/training-session/bookings";
import { errorFormatter } from "lib/utils";
import { DEFAULT_START_DATE, DEFAULT_END_DATE } from "constants";

const localizer = momentLocalizer(moment);
const TrainingSessionCalenderCard: React.FC<IDivProps> = ({ className }) => {
  const { data, isLoading, isError, error } = useGetTrainingSessionBookings({
    duration: {
      startDate: DEFAULT_START_DATE,
      endDate: DEFAULT_END_DATE,
    },
    orderBy: "desc",
    pagination: {
      limit: 50,
    },
  });
  const events = data?.data.result.map((item) => ({
    start: moment(item.startDate).toISOString(),
    end: moment(item.endDate).toISOString(),
    title: item.company.name,
  }));
  return (
    <Card className={className} title={null}>
      <ErrorBoundary>
        <Skeleton loading={isLoading} active paragraph={{ rows: 45 }}>
          <ErrorWrapper
            isError={isError}
            message={errorFormatter(error).message}
          >
            <Calendar
              localizer={localizer}
              events={events}
              style={{ height: 500 }}
            />
          </ErrorWrapper>
        </Skeleton>
      </ErrorBoundary>
    </Card>
  );
};

export default TrainingSessionCalenderCard;
