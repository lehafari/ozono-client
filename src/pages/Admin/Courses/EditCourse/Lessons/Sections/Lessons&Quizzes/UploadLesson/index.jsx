import React from "react";

import { useState } from "react";
import { Box } from "@mui/material";
import { Dialog } from "primereact/dialog";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { MainButton } from "components/common/Buttons/MainButton/styles";

const UploadLesson = ({ lessonId }) => {
  //*** Modal */
  const [display, setDisplay] = useState(false);
  const onClick = () => {
    setDisplay(true);
  };
  const onHide = () => {
    setDisplay(false);
  };
  return (
    <>
      <MainButton
        width="35px"
        height="33px"
        fontSize="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        shadow="1px 1px 10px 0px rgb(0, 0, 0, 0.5)"
        onClick={() => {
          onClick();
        }}
      >
        <FileUploadIcon />
      </MainButton>

      <Dialog
        header="Agregar Quiz o Clase"
        visible={display}
        contentStyle={{ borderRadius: " 0 0 10px 10px", overflow: "hidden" }}
        style={{ width: "65vw" }}
        onHide={() => onHide()}
        resizable={false}
        draggable={false}
      >
        <Box>ola</Box>
      </Dialog>
    </>
  );
};

export default UploadLesson;
