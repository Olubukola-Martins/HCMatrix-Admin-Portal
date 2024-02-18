import { Card, Typography, Select, List, Avatar, Skeleton } from "antd";
import { DEFAULT_END_DATE, DEFAULT_START_DATE, moduleOptions } from "constants";
import { useGetTransactionHistory } from "lib/api/finance-metrics/transaction-history";
import { currencyFormatter, generateAvatarFromInitials } from "lib/utils";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";
import { IDivProps, TModule } from "types";

const TransactionHistoryCard: React.FC<IDivProps> = ({ className }) => {
  const [module, setModule] = useState<TModule>();
  const { data, isLoading } = useGetTransactionHistory({
    modules: module ? [module] : undefined,
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
            <span className="font-light">Transaction History</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <Select
              placeholder={"Filter"}
              value={module}
              onSelect={(val) => setModule(val)}
              options={moduleOptions.map((item) => ({
                value: item,
                label: <span className="capitalize">{item}</span>,
              }))}
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
                    <span>
                      Active -{" "}
                      {item.licensedEmployeeCount +
                        item.unlicensedEmployeeCount}
                      ,{" "}
                    </span>
                    <span>Deactivated - {item.deactivatedEmployeeCount}</span>
                  </span>
                }
              />
              <span className="capitalize">
                {currencyFormatter({
                  currency: item.priceType,
                  value: item.transaction.totalAmountPaid,
                })}
              </span>
            </List.Item>
          )}
        />

        <div className="flex justify-center mt-4">
          <Link to={appRoutePaths.financeMetricsTransactionHistory}>
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

export default TransactionHistoryCard;
