import { useState } from "react";
import { Box } from "@mui/material";
import InputButton from "components/common/Forms/FormButton";
import PaymenHistory from "./PaymentsHistory";
import PendingPayments from "./PendingPayments";

const Payments = () => {
  const [optionDisplay, setOptionDisplay] = useState(null);
  console.log(optionDisplay);
  return (
    <>
      {/* Contenedor superior de los botones */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "0rem 1rem",
          backgorundColor: "red",
        }}
      >
        <InputButton
          text="Historial de pago"
          onClick={() => setOptionDisplay(false)}
        />
        <InputButton
          text="Pagos Pendientes"
          onClick={() => setOptionDisplay(true)}
        />
      </Box>

      {/* Contenedor del contenido de la pagina, ya sea historial o Pagos pendientes */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {optionDisplay === null && <span>Seleccione una opcion</span>}
        {optionDisplay === false && <PaymenHistory />}
        {optionDisplay === true && <PendingPayments />}
      </Box>
    </>
  );
};

export default Payments;
