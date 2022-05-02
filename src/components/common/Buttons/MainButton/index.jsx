import { useNavigate } from "react-router-dom";
import { MainButton } from "./styles";

export const Button = (props, { children }) => {
  const navigate = useNavigate();
  console.log(props.event);
  return (
    <MainButton
      // Atributos input
      //Acciones/Funciones ---> Path si es un link / event si tiene una accion
      onClick={() => (props.path ? navigate(props.path) : props.event)}
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
      display={props.display}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
    >
      {props.text}
    </MainButton>
  );
};
