import { Card, Typography, DatePicker, Select, theme } from "antd";
import { LineChart } from "components/charts";
import CurrencySwitcher from "components/currency/CurrencySwitcher";
import { dummyChartData } from "constants";
import React from "react";
import { IDivProps } from "types";

const IncomeRateCard: React.FC<IDivProps> = ({ className }) => {
  const { token } = theme.useToken();
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
      <div className="h-64 relative">
        {/* The div below hides the label from chart */}
        <div className="absolute top-2 left-0 right-0 bottom-0 bg-white dark:bg-[#141414] h-4" />

        <LineChart
          maintainAspectRatio={false}
          data={dummyChartData.map((item) => item.value)}
          labels={dummyChartData.map((item) => item.year)}
          dataEntityLabel={undefined}
          bgColors={token.colorPrimary}
        />
      </div>
    </Card>
  );
};

export default IncomeRateCard;
