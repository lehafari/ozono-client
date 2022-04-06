import React from "react";
import { Button } from "../../Buttons/MainButton";
import { ButtonArea, ContentArea, TextArea } from "./styles";

const AccordionContent = (props) => {
  return (
    <ContentArea backg={props.backg}>
      <TextArea>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
      </TextArea>
      <ButtonArea>
        <Button text={props.boton} />
      </ButtonArea>
    </ContentArea>
  );
};

export default AccordionContent;
