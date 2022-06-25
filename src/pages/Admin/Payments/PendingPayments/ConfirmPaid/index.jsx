import { Box, Button, TextField, Typography } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import React from "react";
import { Dialog } from "primereact/dialog";
import { types } from "context/types/types";
import { startPaymentApproved, startPaymentRejected } from "actions/payments";
import Toast from "components/common/Popup/Toast";

const ConfirmPaid = ({ data, dispatch }) => {
  const [visible, setVisible] = React.useState(false);

  const paymentApproved = async () => {
    dispatch({ type: types.paymentStartApproved, payload: {} });
    const body = await startPaymentApproved(data.id);
    console.log("aprobado", body);
    if (!body.statusCode) {
      dispatch({ type: types.paymentApproved, payload: body });
      Toast("success", "Pago aprobado con exito");
    } else {
      dispatch({ type: types.paymentApprovedError, payload: body });
      Toast("error", "Error al aprobar el pago");
    }
  };

  const paymentRejected = async () => {
    dispatch({ type: types.paymentStartRejected, payload: {} });
    const body = await startPaymentRejected(data.id);
    console.log("rechazado", body);
    if (!body.statusCode) {
      dispatch({ type: types.paymentRejected, payload: body });
      Toast("success", "Pago rechazado con exito");
    } else {
      dispatch({ type: types.paymentRejectedError, payload: body });
      Toast("error", "Error al rechazar el pago");
    }
  };

  return (
    <>
      <Button size="small" onClick={() => setVisible(true)}>
        <FactCheckIcon />
      </Button>

      <Dialog
        header="Confirmar Pago"
        visible={visible}
        onHide={() => setVisible(false)}
        draggable={false}
        resizable={false}
        style={{
          width: "70vw",
          height: "75vh",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              margin: "1rem 0",
            }}
          >
            Producto
          </Typography>
          <TextField
            label="Curso que pago"
            sx={{ margin: "0 10px", width: "100%" }}
            value="falta poner en el response del get junto con los datos del usuario"
            readOnly
          />
        </Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            margin: "1rem 0",
          }}
        >
          Datos de la persona
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "0.5rem 0rem",
            flexShrink: "0",
          }}
        >
          <TextField label="name" sx={{ margin: "0 10px", width: "50%" }} />
          <TextField label="email" sx={{ margin: "0 10px" }} />
          <TextField label="tlf" sx={{ margin: "0 10px" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            margin: "1rem 0",
          }}
        >
          Datos del pago
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "0.5rem 0rem",
            flexShrink: "0",
          }}
        >
          <TextField
            label="date"
            sx={{ margin: "0 10px" }}
            value={data.createdAt}
            readOnly
          />
          <TextField
            label="Tipo de pago"
            sx={{ margin: "0 10px" }}
            value={data.paymentMethod}
            readOnly
          />
          <TextField
            label="Referencia"
            sx={{ margin: "0 10px" }}
            value={data.paymentReference}
            readOnly
          />
          <TextField
            label="Monto"
            sx={{ margin: "0 10px" }}
            value={data.amount}
            readOnly
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0rem",
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ margin: "0 1rem" }}
            onClick={paymentApproved}
          >
            Aceptar
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: "0 1rem" }}
            onClick={paymentRejected}
          >
            Rechazar
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default ConfirmPaid;
