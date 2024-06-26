import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { getRatingDetails } from "../constants/RatingFunction";

export interface IActiveCardProps {
  days: string;
  ratingText: string;
}

export const AverageDaysActive: React.FC<IActiveCardProps> = ({
  days,
  ratingText,
}) => {
  const { ratingColor, ratingIcon } = getRatingDetails(ratingText);
  return (
    <div className="border rounded-lg w-72 p-3">
      <div className="border rounded-lg p-4">
        <h2 className="text-center text-base py-2">Average Days Active</h2>
        <div className="flex gap-5 items-center my-3">
          <div
            className="border rounded-full p-1"
            style={{ borderColor: "#7987A5" }}
          >
            <Icon
              icon="gg:profile"
              width="25"
              height="25"
              style={{ color: "#7987A5" }}
            />
          </div>
          <p className="">Users</p>
          <div className="flex items-center gap-1">
            <p className="font-bold text-lg">{days} </p> {""}
            <p>days</p>
          </div>

          <div>
            <p
              className="flex justify-end items-center"
              style={{ color: ratingColor }}
            >
              {ratingText}{" "}
              {ratingIcon && (
                <Icon
                  icon={ratingIcon}
                  width="15"
                  height="15"
                  style={{ color: ratingColor }}
                />
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div
            className="border rounded-full p-1"
            style={{ borderColor: "#AD6359" }}
          >
            <Icon
              icon="majesticons:suitcase-line"
              width="25"
              height="25"
              style={{ color: "#AD6359" }}
            />
          </div>
          <p className="">Accounts</p>
          <div className="flex items-center gap-1">
            <p className="font-bold text-lg">{days} </p> {""}
            <p>days</p>
          </div>

          <div>
            <p
              className="flex justify-end items-center"
              style={{ color: ratingColor }}
            >
              {ratingText}{" "}
              {ratingIcon && (
                <Icon
                  icon={ratingIcon}
                  width="15"
                  height="15"
                  style={{ color: ratingColor }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
