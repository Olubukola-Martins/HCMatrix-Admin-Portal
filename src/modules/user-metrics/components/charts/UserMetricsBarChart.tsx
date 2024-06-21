import { IBarChartProps } from "./UserMetricsLineChart";
import { Icon } from "@iconify/react/dist/iconify.js";

export const UserMetricsBarChart: React.FC<IBarChartProps> = ({
  header,
  filterSelect,
  chart
}) => {
  return (
    <div className="rounded-lg shadow text-accent p-4">
      <h2 className="text-2xl font-medium p-2">{header}</h2>
      <div className="flex justify-between items-center">
        <p className="text-2xl p-2">0</p>
        <div className="flex gap-6 p-2 items-center">
          {filterSelect}

          <Icon
            icon="mi:options-vertical"
            width="25"
            height="25"
            style={{ color: "black" }}
            className="cursor-pointer"
          />
        </div>
      </div>

      {chart}
    </div>
  );
};
