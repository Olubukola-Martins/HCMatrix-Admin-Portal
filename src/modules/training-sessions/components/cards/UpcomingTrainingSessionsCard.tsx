import { Card, Typography, List, Avatar, Skeleton } from "antd";
import { DEFAULT_END_DATE, DEFAULT_START_DATE } from "constants";
import dayjs from "dayjs";
import { useGetTrainingSessionBookings } from "lib/api/subscription/add-ons/training-session/bookings";
import { generateAvatarFromInitials } from "lib/utils";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";
import { IDivProps } from "types";

const UpcomingTrainingSessionsCard: React.FC<IDivProps> = ({ className }) => {
  const { data, isLoading } = useGetTrainingSessionBookings({
    orderBy: "desc",
    duration: { startDate: DEFAULT_START_DATE, endDate: DEFAULT_END_DATE },
    pagination: {
      limit: 5,
    },
  });
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light">Upcoming Sessions</span>
          </Typography.Title>
        </div>
      }
      bordered={false}
    >
      <Skeleton loading={isLoading} paragraph={{ rows: 5 }}>
        <List
          itemLayout="horizontal"
          dataSource={data?.data.result}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    alt={item.company.name}
                    src={
                      item.company.logoUrl ??
                      generateAvatarFromInitials(item.company.name)
                    }
                  />
                }
                title={<span>{item.company.name}</span>}
                description={
                  <span>
                    <span> {item.trainingSession.name} </span>
                  </span>
                }
              />
              <span className="capitalize">
                {dayjs(item.startDate).format("DD MMM YYYY")}
              </span>
            </List.Item>
          )}
        />

        <div className="flex justify-center mt-4">
          <Link to={appRoutePaths.trainingSessionsBookings}>
            <button className="flex items-center space-x-2 group">
              <span className="group-hover:text-accent text-primary">
                View List
              </span>
              <FaArrowRightLong className="group-hover:text-accent text-primary" />
            </button>
          </Link>
        </div>
      </Skeleton>
    </Card>
  );
};

export default UpcomingTrainingSessionsCard;
