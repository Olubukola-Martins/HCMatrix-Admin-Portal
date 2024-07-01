import { Icon } from "@iconify/react/dist/iconify.js";

export interface IBarChartProps {
  header: string;
  filterSelect?: React.ReactNode;
  subscribedSelect?: React.ReactNode;
  monthSelect?: React.ReactNode;
  featureSelect?: React.ReactNode;
  rating?: number;
  ratingText?: string;
  ratingIncreasing?: boolean;
  chart: React.ReactNode;
  isLineChart?: boolean;
  additionalStyles?: string;
}
export const UserMetricsChart: React.FC<IBarChartProps> = ({ header, subscribedSelect, featureSelect, monthSelect, filterSelect, rating, ratingText, additionalStyles, chart,ratingIncreasing, isLineChart = true }) => {
  return (
    <div className={`${additionalStyles} " shadow-accent border rounded-xl shadow-md text-accent p-3 max-h-[340] flex flex-col justify-between"`}>
      <div className="mb-auto flex flex-col justify-between">
        <h2 className=" text-lg md:text-xl xl:text-2xl font-medium p-2">{header}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl xl:text-2xl p-2">0</p>
          <div className="flex gap-5 xl:gap-6 p-2 items-center">
            <div className="flex gap-3 xl:gap-6 flex-col xl:flex-row">
              {subscribedSelect}
              {filterSelect}
              {monthSelect}
              {featureSelect}
            </div>
            {isLineChart && (
              <div>
                <div className="flex gap-1 md:gap-3 justify-items-center align-middle max-w-fit">
                  <p className={`text-right text-lg md:text-xl xl:text-2xl ${ratingIncreasing ? "text-green-500" : "text-red-500"} `}>
                    {ratingIncreasing ? "+" : "-"} {rating}{" "}
                  </p>
                  <Icon icon={`mingcute:arrow-${ratingIncreasing ? "up" : "down"}-fill`} className={`${ratingIncreasing ? "text-green-500" : "text-red-500"} text-2xl text-center`} />
                </div>
                <p className="text-right max-sm:text-xs">{ratingText}</p>
              </div>
            )}
            <Icon icon="mi:options-vertical" width="25" height="25" className="cursor-pointer text-accent" />
          </div>
        </div>
      </div>

      {chart}
    </div>
  );
};
