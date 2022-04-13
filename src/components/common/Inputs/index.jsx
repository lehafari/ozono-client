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
  const { values, errors, touched, setTouched, handleChange, handleBlur } =
    useFormikContext();
  const value = values[name] ? values[name] : "";
  const error = errors[name] ? errors[name] : "";
  const touchedInput = touched[name] ? touched[name] : "";
  return (
    <InputContainer>
      <InputItem
        // Atributos input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
        autoComplete="off"
        onClick={() => setTouched({ ...touched, [name]: true })}
        onTouchStart={() => setTouched({ ...touched, [name]: true })}
        // Props de estilos
        padding={padding}
        width={width}
        heigth={heigth}
        margin={margin}
      />
      {error && touchedInput && <span className="error">{error}</span>}
    </InputContainer>
  );
};

export default Input;
