import React from "react";
import { Icon } from "@iconify/react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

export interface IUserMetricsCardProps {
  header: string;
  acctNumber: string;
  rating: string;
  ratingText: string;
  icon: string;
  iconColor: string;
  arrow?: boolean;
  menuItem?: MenuProps["items"];
}

export const UserMetricsCard: React.FC<IUserMetricsCardProps> = ({
  header,
  icon,
  acctNumber,
  rating,
  ratingText,
  iconColor,
  menuItem,
}) => {
  const isPositive = rating.startsWith("+");
  const isNegative = rating.startsWith("-");

  const ratingColor = isPositive ? "#01966B" : isNegative ? "#FF221E" : "black";
  const ratingIcon = isPositive
    ? "octicon:arrow-up-24"
    : isNegative
    ? "octicon:arrow-down-24"
    : "";
  return (
    <div className="border rounded-lg w-72 p-3">
      <div className="rounded-lg shadow p-5">
        <div className="flex justify-between py-3 mb-4 mx-auto">
          <div className="flex items-center gap-3">
            <div
              className="border rounded-full p-2"
              style={{ borderColor: iconColor }}
            >
              <Icon
                icon={icon}
                width="25"
                height="25"
                style={{ color: iconColor }}
              />
            </div>
            <h2 className="text-lg ">{header}</h2>
          </div>
          <div className="my-auto">
            <Dropdown trigger={["click"]} menu={{ items: menuItem }}>
              <Icon
                icon="mi:options-vertical"
                width="25"
                height="25"
                style={{ color: "black" }}
              />
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <h2 className="font-bold text-2xl">{acctNumber}</h2>

          <div>
            <p
              className="text-xl flex gap-2 justify-end items-center"
              style={{ color: ratingColor }}
            >
              {rating}{" "}
              {ratingIcon && (
                <Icon
                  icon={ratingIcon}
                  width="24"
                  height="24"
                  style={{ color: ratingColor }}
                />
              )}
            </p>
            <p>{ratingText} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
