import { Icon } from "@iconify/react/dist/iconify.js";
import { Dropdown } from "antd";
import React from "react";
import { getRatingDetails } from "../../utils/RatingFunction";
import { IUserMetricsCardProps } from "./ActiveAccounts";

export const DeactivatedAccounts: React.FC<IUserMetricsCardProps> = ({
  acctNumber,
  rating,
  ratingText,
  menuItem,
}) => {
  const { ratingColor, ratingIcon } = getRatingDetails(rating);
  return (
    <div className="border w-[15rem] h-40 p-3 rounded-lg shadow-inner">
      <div className="flex justify-between py-2 mb-5 mx-auto">
        <div className="flex items-center gap-2">
          <div className="border rounded-full p-2 border-[#FF221E]">
            <Icon
              icon="majesticons:suitcase-line"
              width="20"
              height="20"
              style={{ color: "#FF221E" }}
            />
          </div>
          <h2 className="text-lg">Deactivated Accounts</h2>
        </div>
        <div className="my-auto cursor-pointer">
          <Dropdown trigger={["click"]} menu={{ items: menuItem }}>
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
        <h2 className="font-bold text-xl">{acctNumber}</h2>

        <div>
          <p
            className="text-lg flex gap-1 justify-end items-center"
            style={{ color: ratingColor }}
          >
            {rating}{" "}
            {ratingIcon && (
              <Icon
                icon={ratingIcon}
                width="15"
                height="15"
                style={{ color: ratingColor }}
              />
            )}
          </p>
          <p>{ratingText} </p>
        </div>
      </div>
    </div>
  );
};
