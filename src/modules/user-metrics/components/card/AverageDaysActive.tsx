import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { getUserMetricDBComparisonIndicatorValues } from "../../utils/RatingFunction";

export interface IActiveCardProps {
  userDays: string;
  accountDays: string;
  userRating: number;
  accountRating: number;
}

export const AverageDaysActive: React.FC<IActiveCardProps> = ({
  accountDays,
  accountRating,
  userDays,
  userRating,
}) => {
  const userMetrics = getUserMetricDBComparisonIndicatorValues(userRating);
  const accountMetrics =
    getUserMetricDBComparisonIndicatorValues(accountRating);

  return (
    <div
      className="border rounded-lg w-[15rem] h-40 p-2"
      style={{ boxShadow: "inset 0px 0px 10px 0px rgba(0,0,0,0.2)" }}
    >
      <div className="p-2">
        <h2 className="text-center text-base py-1">Average Days Active</h2>

        <div className="flex gap-2 items-center justify-between my-2">
          <Icon
            icon="gg:profile"
            width="30"
            height="30"
            className="border border-[#7987A5] rounded-full p-1"
            style={{ color: "#7987A5" }}
          />

          <p className="">Users</p>
          <div className="flex items-center gap-1">
            <p className="font-bold text-lg">{userDays}</p> days
          </div>

          <div>
            <p
              className="flex items-center text-base"
              style={{ color: userMetrics.color }}
            >
              {userMetrics.formattedValue}{" "}
              {userMetrics.icon && (
                <Icon
                  icon={userMetrics.icon}
                  width="18"
                  height="18"
                  style={{ color: userMetrics.color }}
                />
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-between my-2">
          <Icon
            icon="majesticons:suitcase-line"
            width="50"
            height="30"
            className="border border-[#AD6359] rounded-full p-1"
            style={{ color: "#AD6359" }}
          />

          <p className="">Accounts</p>
          <div className="flex items-center gap-1">
            <p className="font-bold text-lg">{accountDays}</p> days
          </div>

          <div>
            <p
              className="flex items-center text-base"
              style={{ color: accountMetrics.color }}
            >
              {accountMetrics.formattedValue}
              {accountMetrics.icon && (
                <Icon
                  icon={accountMetrics.icon}
                  width="18"
                  height="18"
                  style={{ color: accountMetrics.color }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
