import { ArrowForward } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "./styles";

export const Button = (props) => {
  const navigate = useNavigate();
  return (
    <MainButton
      onClick={() => navigate(props.path)}
      width={props.width}
      padding={props.padding}
      margin={props.margin}
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      border={props.border}
      shadow={props.shadow}
      backgroundColor={props.backgroundColor}
      alignSelf={props.alignSelf}
    >
      {props.text}
    </MainButton>
  );
};
