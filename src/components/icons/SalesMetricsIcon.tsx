import React from "react";
import { IIconProps } from "types";

const SalesMetricsIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 2V3H20.5V5H13.5V19H17.5V21H7.5V19H11.5V5H4.5V3H11.5V2H13.5ZM5.5 6.343L8.328 9.172C9.052 9.895 9.5 10.895 9.5 12C9.5 14.21 7.71 16 5.5 16C3.29 16 1.5 14.21 1.5 12C1.5 10.895 1.948 9.895 2.672 9.172L5.5 6.343ZM19.5 6.343L22.328 9.172C23.052 9.895 23.5 10.895 23.5 12C23.5 14.21 21.71 16 19.5 16C17.29 16 15.5 14.21 15.5 12C15.5 10.895 15.948 9.895 16.672 9.172L19.5 6.343ZM5.5 9.172L4.086 10.586C3.712 10.96 3.5 11.46 3.5 12C3.5 13.105 4.395 14 5.5 14C6.605 14 7.5 13.105 7.5 12C7.5 11.46 7.288 10.96 6.914 10.586L5.5 9.172ZM19.5 9.172L18.086 10.586C17.712 10.96 17.5 11.46 17.5 12C17.5 13.105 18.395 14 19.5 14C20.605 14 21.5 13.105 21.5 12C21.5 11.46 21.288 10.96 20.914 10.586L19.5 9.172Z"
        fill="#3A3A3A"
      />
    </svg>
  );
};

export default SalesMetricsIcon;
