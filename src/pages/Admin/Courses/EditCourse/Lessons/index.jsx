import { Box } from "@mui/material";
import { MainButton } from "components/common/Buttons/MainButton/styles";
import React from "react";
import ModalFormSection from "./ModalFormSection";

const Lessons = () => {
  return (
    //Container de toda la seccion
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Container del titulo */}
      <Box
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "text",
        }}
      >
        <span>Para agregar una seccion presione el boton</span>
      </Box>
      {/* contenedor para el boton de agregar seccion */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ModalFormSection />
      </Box>
      {/* Contenedor de todas las secciones (acordeones) */}
      <Box
        sx={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          textAlign: "center",
        }}
      >
        {" "}
        ola{" "}
      </Box>
    </Box>
  );
};

export default Lessons;
