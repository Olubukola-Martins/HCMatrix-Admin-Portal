import { Icon } from "@iconify/react/dist/iconify.js";
import { Dropdown, MenuProps } from "antd";
import { getUserMetricDBComparisonIndicatorValues } from "modules/user-metrics/utils/RatingFunction";
import { IDivProps } from "types";

type IconProps = {
  color: string;
  icon: string;
};

type IndicatorProps = {
  indicatorRating: number;
  indicatorText: string;
};

export type UserMetricDBAccountInfoCardProps = Pick<IDivProps, "className"> & {
  title: string;
  icon: IconProps;
  actionItems?: MenuProps["items"];
  amount: number;
  indicator: IndicatorProps;
};

export type IUserMetricsCardProps = Pick<UserMetricDBAccountInfoCardProps, "className">;

export const UserMetricDBAccountInfoCard: React.FC<
  UserMetricDBAccountInfoCardProps
> = ({
  className = "border w-[15rem] h-32 p-3 rounded-lg",
  icon,
  actionItems,
  amount,
  indicator,
  title,
}) => {
  const indicatorMetrics = getUserMetricDBComparisonIndicatorValues(
    indicator.indicatorRating
  );
  return (
    <div
      className={className}
      style={{ boxShadow: "inset 0px 0px 10px 0px rgba(0,0,0,0.2)" }}
    >
      <div className="flex justify-between py-2 mb-5 mx-auto">
        <div className="flex items-center gap-2">
          <div
            className="border rounded-full p-1"
            style={{ borderColor: icon.color }}
          >
            <Icon
              icon={icon.icon}
              width="25"
              height="25"
              style={{ color: icon.color }}
            />
          </div>

          <h2 className="text-lg">{title}</h2>
        </div>
        <div className="my-auto cursor-pointer">
          <Dropdown trigger={["click"]} menu={{ items: actionItems }}>
            <Icon
              icon="mi:options-vertical"
              width="20"
              height="20"
              style={{ color: "black" }}
            />
          </Dropdown>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <h2 className="font-bold text-xl">{amount}</h2>
        <div>
          <p
            className="text-lg flex gap-1 justify-end items-center"
            style={{ color: indicatorMetrics.color }}
          >
            {indicatorMetrics.formattedValue}{" "}
            {indicatorMetrics.formattedValue && (
              <Icon
                icon={indicatorMetrics.icon}
                width="15"
                height="15"
                style={{ color: indicatorMetrics.color }}
              />
            )}
          </p>
          <p>{indicator.indicatorText} </p>
        </div>
      </div>
    </div>
  );
};



