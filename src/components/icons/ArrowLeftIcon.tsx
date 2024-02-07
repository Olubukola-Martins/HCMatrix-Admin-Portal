import React from "react";
import { IIconProps } from "types";

const ArrowLeftIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.828 7.00023L7.778 11.9502L6.364 13.3642L0 7.00023L6.364 0.63623L7.778 2.05023L2.828 7.00023Z"
        className="fill-accent"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
