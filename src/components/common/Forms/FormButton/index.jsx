<<<<<<< Updated upstream
import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { Button } from '../../Buttons/MainButton';
=======
import { useFormikContext } from "formik";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { MainButton } from "../../Buttons/MainButton/styles";
>>>>>>> Stashed changes

const InputButton = (props) => {
  const { errors, isSubmitting } = useFormikContext();
  useEffect(() => {
    console.log(props.text);
  }, []);
  return (
    <Button
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
      {props.text} sd
    </Button>
  );
};

export default InputButton;
{
  /* {isSubmitting ? <CgSpinnerTwoAlt className="spin" size={20} /> : children} */
}
