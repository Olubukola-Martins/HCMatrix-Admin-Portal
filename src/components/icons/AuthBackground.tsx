import React from "react";
import { IIconProps } from "types";

const AuthBackground: React.FC<IIconProps> = (props) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="-646 29 627 1024"
      //   style={{ enableBackground: "new -646 29 627 1024" }}
      xmlSpace="preserve"
      {...props}
    >
      <rect x="-646" y="29" className="st0" width="627" height="1024" />
      <g>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="-799.7516"
          y1="1267.5564"
          x2="187.3943"
          y2="-267.4135"
        >
          <stop offset="0" style={{ stopColor: "var(--faded)" }} />
          <stop offset="1" style={{ stopColor: "var(--primary)" }} />
        </linearGradient>
        <rect x="-646" y="29" className="st1" width="627" height="1024" />
        <path
          className="st2"
          d="M-417.8,1053H-646V882.2c9.8-1.5,19.8-2.2,30-2.2C-514.7,880-431,955.3-417.8,1053z"
        />
        <circle className="st2" cx="-200" cy="179" r="20" />
        <rect x="-582" y="111" className="st0" width="176" height="176" />
        <path
          className="st2"
          d="M-593.9,321l22.1,25l-22.1,25l-22.1-25L-593.9,321z"
        />

        <rect
          x="-255.1"
          y="839.6"
          transform="matrix(-0.7505 -0.6609 0.6609 -0.7505 -946.859 1341.7686)"
          className="st2"
          width="70"
          height="20"
        />
        <polygon className="st2" points="-19,443.8 -19,586.8 -70.2,586.8 	" />
      </g>
    </svg>
  );
};

export default AuthBackground;
