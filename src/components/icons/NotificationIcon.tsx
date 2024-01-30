import React from "react";
import { IIconProps } from "types";

const NotificationIcon: React.FC<IIconProps & { isNotified?: boolean }> = ({
  isNotified = false,
  ...props
}) => {
  return (
    <svg
      width="22"
      height="27"
      viewBox="0 0 22 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.0003 26.333C9.53366 26.333 8.33366 25.133 8.33366 23.6663H13.667C13.667 25.133 12.4803 26.333 11.0003 26.333ZM3.00032 18.333V11.6663C3.00032 7.57301 5.18699 4.14634 9.00033 3.23967V2.33301C9.00033 1.22634 9.89366 0.333008 11.0003 0.333008C12.107 0.333008 13.0003 1.22634 13.0003 2.33301V3.23967C16.827 4.14634 19.0003 7.55967 19.0003 11.6663V18.333L21.667 20.9997V22.333H0.333658V20.9997L3.00032 18.333Z"
        fill="#3A3A3A"
      />
      {isNotified ? (
        <circle
          cx="2"
          cy="4"
          r="6"
          transform="matrix(-1 0 0 1 17.667 2.33301)"
          fill="#D20000"
        />
      ) : null}
    </svg>
  );
};

export default NotificationIcon;
