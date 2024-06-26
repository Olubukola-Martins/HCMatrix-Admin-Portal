import { Icon } from "@iconify/react/dist/iconify.js";

export interface IBarChartProps {
  header: string;
  filterSelect?: React.ReactNode;
  subscribedSelect?: React.ReactNode;
  monthSelect?: React.ReactNode;
  featureSelect?: React.ReactNode;
  rating?: string;
  ratingText?: string;
  chart: React.ReactNode;
  isLineChart?: boolean;
  additionalStyles?: string
}
export const UserMetricsChart: React.FC<IBarChartProps> = ({ header, subscribedSelect, featureSelect, monthSelect, filterSelect, rating, ratingText,additionalStyles, chart,isLineChart = true }) => {
  return (
    <div className={`${additionalStyles} " shadow-accent rounded-xl shadow-md text-accent p-6 h-fit max-h-fit"`}>
      <div className="m-6">

      <h2 className="text-2xl font-medium p-2">{header}</h2>
      <div className="flex justify-between items-center">
        <p className="text-2xl p-2">0</p>
        <div className="flex gap-6 p-2 items-center">
          {subscribedSelect}
          {filterSelect}
          {monthSelect}
          {featureSelect}
          {isLineChart && (
            <div>
              <p className="text-right text-2xl">{rating}</p>
              <p className="text-right">{ratingText}</p>
            </div>
          )}
          <Icon icon="mi:options-vertical" width="25" height="25" className="cursor-pointer text-accent" />
        </div>
      </div>
       {chart}
      </div>
    </div>
  );
};
