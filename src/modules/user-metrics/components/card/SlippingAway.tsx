import { Icon } from "@iconify/react/dist/iconify.js";
import { Dropdown } from "antd";
import React from "react";
import { getRatingDetails } from "../constants/RatingFunction";
import { IUserMetricsCardProps } from "./ActiveAccounts";

export const SlippingAway: React.FC<IUserMetricsCardProps> = ({
  acctNumber,
  rating,
  ratingText,
  menuItem,
}) => {
  const { ratingColor, ratingIcon } = getRatingDetails(rating);
  return (
    <div className="border rounded-lg w-72 p-3 ">
      <div className="border rounded-lg shadow p-5">
        <div className="flex justify-between py-3 mb-4 mx-auto">
          <div className="flex items-center gap-3">
            <div className="border rounded-full p-2 border-[#FFA600]">
              <Icon
                icon="solar:course-down-line-duotone"
                width="25"
                height="25"
                style={{ color: "#FFA600" }}
              />
            </div>
            <h2 className="text-lg ">Slipping Away</h2>
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
