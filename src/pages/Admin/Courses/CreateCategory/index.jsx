import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { ButtonContainer } from "../style";
// import { Button } from "primereact/button";

import { Button } from "../../../../components/common/Buttons/MainButton";
import { MainButton } from "../../../../components/common/Buttons/MainButton/styles";

const CreateCategory = () => {
  const [displayBasic, setDisplayBasic] = useState(false);

  const click = () => {
    setDisplayBasic(true);
    console.log("funciona");
  };
  const onHide = () => {
    setDisplayBasic(false);
  };
  return (
    <>
      {/* <Button
        label="Crear categoria"
        className="p-button-rounded"
        style={{
          padding: "0.5rem 1rem",
          height: "2.5rem",
          fontSize: "1.2rem",
          fontWeight: "400",
          fontFamily: "Lato, sans-serif",
          margin: "1rem 0",
          backgroundColor: "#00A8E8",
        }}
        onClick={() => onClick()}
      /> */}
      <ButtonContainer>
        <MainButton onClick={() => click()}>Categorias</MainButton>
      </ButtonContainer>
      <Dialog
        header="Categorias"
        visible={displayBasic}
        style={{ width: "50vw" }}
        draggable={false}
        onHide={() => onHide()}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </>
  );
};

export default CreateCategory;
