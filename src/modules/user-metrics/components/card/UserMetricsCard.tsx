import React from "react";
import { Icon } from "@iconify/react";
interface UserMetricsCardProps {
  header: string;
  acctNumber: string;
  rating: string;
  ratingText: string;
  icon: string;
  iconColor:string
}

export const UserMetricsCard: React.FC<UserMetricsCardProps> = ({
  header,
  icon,
  acctNumber,
  rating,
  ratingText,
  iconColor
}) => {
  return (
    <div className="rounded-lg shadow text-accent w-72 p-4">
      <div className="flex justify-between py-3 mb-4 mx-auto">
        <div className="flex items-center gap-3">
          <div className="border rounded-full p-3">
            <Icon
              icon={icon}
              width="25"
              height="25"
              style={{ color: iconColor }}
            />
          </div>
          <div className="text-lg ">{header}</div>
        </div>
        <div className="my-auto">
          <Icon
            icon="mi:options-vertical"
            width="25"
            height="25"
            style={{ color: "#d3cfcf" }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h2 className="font-bold text-2xl">{acctNumber}</h2>
        <div>
          <p className="text-right text-xl">{rating}</p>
          <p>{ratingText}</p>
        </div>
      </div>
    </div>
  );
};
