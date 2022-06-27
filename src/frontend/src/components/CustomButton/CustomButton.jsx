import React from "react";
import { Button, OutlineButton } from "../../styles/global.styles";

const CustomButton = ({ variant = "primary", ...props }) => {
  const buttons = {
    primary: <Button {...props} />,
    outline: <OutlineButton {...props} />,
  };

  return buttons[variant];
};

export default CustomButton;
