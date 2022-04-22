import { useFormikContext } from "formik";
import { Editor } from "primereact/editor";
import { useState } from "react";
import { ErrorMessage, TextAreaContainer } from "./styles";

const Textarea2 = ({
  id,
  name,
  placeholder,
  padding,
  width,
  heigth,
  margin,
}) => {
  const { values, errors, touched, setTouched } = useFormikContext();
  // const value = values[name] ? values[name] : "";
  const [text, setText] = useState("");
  values[name] = text;
  const error = errors[name] ? errors[name] : "";
  const touchedInput = touched[name] ? touched[name] : "";
  return (
    <TextAreaContainer>
      <Editor
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        style={{ height: "250px" }}
        onClick={() => setTouched({ ...touched, [name]: true })}
        onTouchStart={() => setTouched({ ...touched, [name]: true })}
      />
      {error && touchedInput && <ErrorMessage>{error}</ErrorMessage>}
    </TextAreaContainer>
  );
};

export default Textarea2;
