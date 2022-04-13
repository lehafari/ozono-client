import { useFormikContext } from "formik";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { MainButton } from "../MainButton/styles";

const InputButton = (props) => {
  const { errors, isSubmitting } = useFormikContext();
  return (
    <MainButton
      // Atributos input
      type="submit"
      //Acciones/Funciones
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
      {/* {isSubmitting ? <CgSpinnerTwoAlt className="spin" size={20} /> : children} */}
    </MainButton>
  );
};

export default InputButton;
