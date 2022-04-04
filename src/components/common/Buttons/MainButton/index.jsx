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
    >
      {props.text}
    </MainButton>
  );
};