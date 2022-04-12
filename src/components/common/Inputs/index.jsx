import { useFormikContext } from "formik";
import React from "react";
import { InputContainer, InputItem } from "./styles";

const Input = ({
  id,
  name,
  type,
  placeholder,
  padding,
  width,
  heigth,
  margin,
}) => {
  const { values, setFieldValue } = useFormikContext();
  const value = values[name] ? values[name] : "";
  return (
    <InputContainer>
      <InputItem
        // Atributos input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={value}
        autoComplete="off"
        // Props de estilos
        padding={padding}
        width={width}
        heigth={heigth}
        margin={margin}
      />
    </InputContainer>
  );
};

export default Input;
