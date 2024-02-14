import { AppLogoImage } from "assets";
import { AppLogoLightImage } from "assets/images";
import React from "react";
import { IImageProps } from "types";

const AppLogo: React.FC<IImageProps & { colorMode?: "light" | "dark" }> = ({
  colorMode = "dark",
  ...props
}) => {
  return (
    <>
      {colorMode === "light" ? (
        <img src={AppLogoLightImage} alt="hcmatrix app logo" {...props} />
      ) : null}
      {colorMode === "dark" ? (
        <img src={AppLogoImage} alt="hcmatrix app logo" {...props} />
      ) : null}
    </>
  );
};

export default AppLogo;
