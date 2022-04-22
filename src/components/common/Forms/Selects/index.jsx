import { useFormikContext } from "formik";
import React from "react";
import { ErrorMessage } from "../Inputs/styles";
import { SelectContainer, SelectInput } from "./styles";

const Select = ({
  text,
  name,
  options,
  alignItems,
  padding,
  width,
  heigth,
  margin,
  backgroundColor,
}) => {
  const { values, errors, touched, setTouched, handleChange } =
    useFormikContext();
  const value = values[name] ? values[name] : "";
  const error = errors[name] ? errors[name] : "";
  const touchedInput = touched[name] ? touched[name] : "";
  return (
    <SelectContainer alignItems={alignItems}>
      <SelectInput
        // Atributos inputSelect
        name={name}
        value={value}
        onChange={handleChange}
        onClick={() => setTouched({ ...touched, [name]: true })}
        onTouchStart={() => setTouched({ ...touched, [name]: true })}
        // Estilos
        padding={padding}
        width={width}
        heigth={heigth}
        margin={margin}
        backgroundColor={backgroundColor}
      >
        <option value="">{text}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        {error && touchedInput && <ErrorMessage>{error}</ErrorMessage>}
      </SelectInput>
    </SelectContainer>
  );
};

export default Select;
