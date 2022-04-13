import { useNavigate } from "react-router-dom";
import { MainButton } from "./styles";

export const Button = (props, { children }) => {
  const navigate = useNavigate();
  return (
    <MainButton
      // Atributos input
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
    </MainButton>
  );
};
