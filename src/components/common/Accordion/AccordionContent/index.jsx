import React from "react";
import { Button } from "../../Buttons/MainButton";
import { ButtonArea, ContentArea, TextArea } from "./styles";

const AccordionContent = () => {
  return (
    <ContentArea>
      <TextArea>
        <h3>Texto</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the ndustry’s standard dummy text ever
          since the 1500s.
        </p>
      </TextArea>
      <ButtonArea>
        <Button text="Entrar a clase" />
      </ButtonArea>
    </ContentArea>
  );
};

export default AccordionContent;
