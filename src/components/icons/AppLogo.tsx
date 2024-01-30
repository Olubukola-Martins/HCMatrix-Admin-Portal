import { AppLogoImage } from "assets";
import React from "react";
import { IImageProps } from "types";

const AppLogo: React.FC<IImageProps> = (props) => {
  return <img src={AppLogoImage} alt="hcmatrix app logo" {...props} />;
};

export default AppLogo;
