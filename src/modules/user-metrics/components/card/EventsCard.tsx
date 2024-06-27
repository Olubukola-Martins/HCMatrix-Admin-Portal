import { Icon } from "@iconify/react/dist/iconify.js";
import { Dropdown } from "antd";
import React from "react";
import { getRatingDetails } from "../../utils/RatingFunction";
import { IUserMetricsCardProps } from "./ActiveAccounts";

export const EventsCard: React.FC<IUserMetricsCardProps> = ({
  acctNumber,
  rating,
  ratingText,
  menuItem,
}) => {
  const { ratingColor, ratingIcon } = getRatingDetails(rating);
  return (
    <div
      className="border w-[15rem] h-40 p-3 rounded-lg"
      style={{ boxShadow: "inset 0px 0px 10px 0px rgba(0,0,0,0.2)" }}
    >
      <div className="flex justify-between py-2 mb-5 mx-auto">
        <div className="flex items-center gap-2">
          <div className="border rounded-full p-2 border-[#3EBE5E]">
            <Icon
              icon="mdi:calendar"
              width="20"
              height="20"
              style={{ color: "#3EBE5E" }}
            />
          </div>
          <h2 className="text-lg">Events</h2>
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
