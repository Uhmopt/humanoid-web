import imageWhite from "assets/img/logo/logo-white.svg";
import image from "assets/img/logo/logo.svg";
import { APP_NAME } from "lib/global";
import React from "react";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import CustomText from "./typography/CustomText";

export default function Logo({ variant = "image", color = "primary" }) {
  return (
    <CustomLink to="/">
      {variant === "image" ? (
        <CustomImage
          src={color === "white" ? imageWhite : image}
          alt={APP_NAME}
          className="sm-max:w-11 sm-max:h-11"
        />
      ) : (
        <CustomText variant="h3" className="uppercase">
          {APP_NAME}
        </CustomText>
      )}
    </CustomLink>
  );
}
