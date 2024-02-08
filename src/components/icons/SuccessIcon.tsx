import React from "react";
import { IIconProps } from "types";

const SuccessIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="62" height="62" rx="31" fill="#28A745" fill-opacity="0.4" />
      <rect
        x="3.5"
        y="3.5"
        width="55"
        height="55"
        rx="27.5"
        stroke="#28A745"
        stroke-opacity="0.2"
        stroke-width="7"
      />
      <path
        d="M40 25.9998L28 37.9998L22.5 32.4998L23.91 31.0898L28 35.1698L38.59 24.5898L40 25.9998Z"
        fill="white"
      />
    </svg>
  );
};

export default SuccessIcon;
