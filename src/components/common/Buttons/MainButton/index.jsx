import { useFormikContext } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "./styles";
import { CgSpinnerTwoAlt } from "react-icons/cg";

export const Button = (props, { children }) => {
  const navigate = useNavigate();
  const { errors, isSubmitting } = useFormikContext();
  return (
    <MainButton
      // Atributos input
      type="submit"
      //Acciones/Funciones
      onClick={() => navigate(props.path)}
      // Estilos
      width={props.width}
      padding={props.padding}
      margin={props.margin}
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      border={props.border}
      borderRadius={props.borderRadius}
      shadow={props.shadow}
      backgroundColor={props.backgroundColor}
      alignSelf={props.alignSelf}
    >
      {props.text}
      {isSubmitting ? <CgSpinnerTwoAlt className="spin" size={20} /> : children}
    </MainButton>
  );
};
