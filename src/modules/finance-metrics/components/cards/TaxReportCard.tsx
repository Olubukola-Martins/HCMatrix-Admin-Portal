import { Card, Typography, List, Avatar, Skeleton, DatePicker } from "antd";
import {
  DEFAULT_START_DATE,
  DEFAULT_END_DATE,
  DEFAULT_DATE_FORMAT,
} from "constants";
import dayjs, { Dayjs } from "dayjs";
import { useGetTaxReports } from "lib/api/finance-metrics/tax-report";
import { currencyFormatter, generateAvatarFromInitials } from "lib/utils";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";
import { IDivProps } from "types";

const TaxReportCard: React.FC<IDivProps> = ({ className }) => {
  const [duration, setDuration] = useState<[Dayjs, Dayjs]>([
    dayjs(DEFAULT_START_DATE),
    dayjs(DEFAULT_END_DATE),
  ]);

  const { data, isLoading } = useGetTaxReports({
    duration: {
      startDate: duration?.[0].format(DEFAULT_DATE_FORMAT),
      endDate: duration?.[1].format(DEFAULT_DATE_FORMAT),
    },
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
            <span className="font-light">Tax Report Card</span>
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
      <Skeleton loading={isLoading} paragraph={{ rows: 5 }}>
        <List
          loading={false}
          itemLayout="horizontal"
          dataSource={data?.data.result}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    alt={item.companySubscription.company.name}
                    src={
                      item.companySubscription.company.logoUrl ??
                      generateAvatarFromInitials(
                        item.companySubscription.company.name
                      )
                    }
                  />
                }
                title={<span>{item.companySubscription.company.name}</span>}
              />
              <span className="capitalize">
                {currencyFormatter({
                  currency: "ngn",
                  value: item.totalAmountPaid,
                })}
              </span>
            </List.Item>
          )}
        />

        <div className="flex justify-center mt-4">
          <Link to={appRoutePaths.financeMetricsTaxReport}>
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

export default TaxReportCard;
