import { Card, Typography, Select, Button, List, Avatar, Skeleton } from "antd";
import { subscriptionTypeOptions } from "constants";
import useHandleCurrency from "hooks/currency/useHandleCurrency";
import { useGetSubscriptions } from "lib/api/subscription";
import { currencyFormatter, generateAvatarFromInitials } from "lib/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";
import { IDivProps, TSubscriptionType } from "types";

const PricesCard: React.FC<IDivProps> = ({ className }) => {
  const { selectedCurrency: priceType } = useHandleCurrency();
  const [type, setType] = useState<TSubscriptionType>("module");
  const { data, isLoading } = useGetSubscriptions({ priceType, type });
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light">Prices</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <Select
              placeholder={"Filter"}
              value={type}
              onSelect={(val) => setType(val)}
              options={subscriptionTypeOptions.map((item) => ({
                value: item,
                label: <span className="capitalize">{item}</span>,
              }))}
            />
            <Link to={appRoutePaths.settingsPrices}>
              <Button type="default">Set Prices</Button>
            </Link>
          </div>
        </div>
      }
      bordered={false}
    >
      <Skeleton loading={isLoading} paragraph={{ rows: 5 }}>
        <List
          itemLayout="horizontal"
          dataSource={data?.data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    alt={item.name}
                    src={item.iconUrl ?? generateAvatarFromInitials(item.name)}
                  />
                }
                title={<span>{item.name}</span>}
                description={null}
              />
              {/* The Prices here are monthly prices as DESIGN did not specify what prices were intended, so simply displayed the monthly equivalent */}
              <span>
                {currencyFormatter({
                  currency: priceType,
                  value:
                    item.prices.find((price) => price.type === priceType)
                      ?.monthlyPricePerLicensedEmployee ?? 0,
                })}
              </span>
            </List.Item>
          )}
        />
      </Skeleton>
    </Card>
  );
};

export default PricesCard;
