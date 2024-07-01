import React from "react";
import {
  UserMetricDBAccountInfoCardProps,
  UserMetricDBAccountInfoCard,
} from "./UserMetricsCardInfo";


export type IUserMetricsCardProps = Pick<
  UserMetricDBAccountInfoCardProps,
  "className"
>;

export const NewEventsCard: React.FC<IUserMetricsCardProps> = ({
  className,
}) => {
  return (
    <UserMetricDBAccountInfoCard
      title="Events"
      amount={50}
      icon={{
        color: "#3EBE5E",
        icon: "mdi:calendar",
      }}
      indicator={{
        indicatorRating: -50,
        indicatorText: "",
      }}
      actionItems={[
        {
          label: "View More",
          key: 0,
        },
        {
          label: "Something else",
          key: 1,
        },
      ]}
      className={className}
    />
  );
};
