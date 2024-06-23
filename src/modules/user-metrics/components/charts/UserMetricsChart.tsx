import { Icon } from "@iconify/react/dist/iconify.js";
// import {Icon} from "@iconify/react"

export interface IBarChartProps {
  header: string;
  filterSelect: React.ReactNode;
  rating?: string;
  ratingText?: string;
  chart:React.ReactNode
}
export const UserMetricsLineChart: React.FC<IBarChartProps> = ({
  header,
  filterSelect,
  rating,
  ratingText,
  chart
}) => {
  return (
    <div className="rounded-lg shadow text-accent p-4">
      <h2 className="text-2xl font-medium p-2">{header}</h2>
      <div className="flex justify-between items-center">
        <p className="text-2xl p-2">0</p>
        <div className="flex gap-6 p-2 items-center">
          {filterSelect}
          <div>
            <p className="text-right text-2xl">{rating}</p>
            <p className="text-right">{ratingText}</p>
          </div>
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
