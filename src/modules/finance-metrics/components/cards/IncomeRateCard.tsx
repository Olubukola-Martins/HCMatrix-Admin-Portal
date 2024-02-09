import { Card, Typography, DatePicker, Select } from "antd";
import LineChartWithLabelsCovered from "components/charts/modified/LineChartWithLabelsCovered";
import CurrencySwitcher from "components/currency/CurrencySwitcher";
import { dummyChartData } from "constants";
import React from "react";
import { IDivProps } from "types";

const IncomeRateCard: React.FC<IDivProps> = ({ className }) => {
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light">Income Rate</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <DatePicker.RangePicker placeholder={["From", "To"]} />
            <Select
              placeholder={"Module"}
              mode="multiple"
              className="lg:min-w-28"
            />
            <Select
              placeholder={"Location"}
              mode="multiple"
              className="lg:min-w-28"
            />
            <CurrencySwitcher />
          </div>
        </div>
      }
      bordered={false}
    >
      <LineChartWithLabelsCovered
        dataValues={dummyChartData.map((item) => item.value)}
        labels={dummyChartData.map((item) => item.year)}
        className="h-64 relative"
      />
    </Card>
  );
};

export default IncomeRateCard;
