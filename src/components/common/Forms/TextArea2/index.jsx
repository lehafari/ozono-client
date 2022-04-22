import { useFormikContext } from "formik";
import { Editor } from "primereact/editor";
import { ErrorMessage, TextAreaContainer, TextAreaItem } from "./styles";

const Textarea2 = ({
  id,
  name,
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
    <TextAreaContainer>
      <Editor
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onTextChange={handleChange}
        style={{ height: "250px" }}
        onBlur={handleBlur}
        onClick={() => setTouched({ ...touched, [name]: true })}
        onTouchStart={() => setTouched({ ...touched, [name]: true })}
      />
      {error && touchedInput && <ErrorMessage>{error}</ErrorMessage>}
    </TextAreaContainer>
  );
};

export default Textarea2;
