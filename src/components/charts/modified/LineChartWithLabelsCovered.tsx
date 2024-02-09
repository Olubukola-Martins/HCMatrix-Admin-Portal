import { theme } from "antd";
import React from "react";
import { IDivProps } from "types";
import { LineChart } from "..";

const LineChartWithLabelsCovered: React.FC<
  Pick<IDivProps, "className"> & {
    dataEntityLabel?: string;
    dataValues: number[];
    labels?: string[];
  }
> = ({
  dataEntityLabel,
  className = "h-64 relative",
  dataValues,
  labels = [],
}) => {
  const { token } = theme.useToken();
  return (
    <div className={className}>
      {/* The div below hides the label from chart */}
      <div className="absolute top-2 left-0 right-0 bottom-0 bg-white dark:bg-[#141414] h-4" />

      <LineChart
        maintainAspectRatio={false}
        data={dataValues}
        labels={labels}
        dataEntityLabel={dataEntityLabel}
        bgColors={token.colorPrimary}
      />
    </div>
  );
};

export default LineChartWithLabelsCovered;
