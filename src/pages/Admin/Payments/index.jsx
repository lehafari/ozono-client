import { useReducer, useState, useEffect } from "react";
import { Box } from "@mui/material";
import InputButton from "components/common/Forms/FormButton";
import PaymenHistory from "./PaymentsHistory";
import PendingPayments from "./PendingPayments";
import {
  initialState,
  paymentsReducer,
} from "context/payments/paymentsReducer";
import { startGetAllPayments } from "actions/payments";
import { types } from "context/types/types";

const Payments = () => {
  //Estado que controla el historial de pagos y los pagos pendientes
  const [optionDisplay, setOptionDisplay] = useState(null);
  //reducer de pagos
  const [payments, dispatch] = useReducer(paymentsReducer, initialState);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const getAllPayments = async () => {
      dispatch({ type: types.paymentStartFetch, payload: {} });
      const body = await startGetAllPayments();
      if (!body.statusCode) {
        dispatch({ type: types.paymentFetch, payload: body });
      } else {
        dispatch({ type: types.paymentError, payload: body });
      }
    };
    getAllPayments();
    setFlag(false);
  }, [flag]);

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
        {optionDisplay === false && (
          <PaymenHistory payments={payments.payments} />
        )}
        {optionDisplay === true && (
          <PendingPayments
            flag={flag}
            setFlag={setFlag}
            loading={payments.loading}
            payments={payments.payments}
            dispatch={dispatch}
          />
        )}
      </Box>
    </>
  );
};

export default Payments;
