import { Box, Button, TextField, Typography } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import React from "react";
import { Dialog } from "primereact/dialog";

const ConfirmPaid = (props) => {
  const [visible, setVisible] = React.useState(false);

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
          height: "70vh",
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
          <TextField label="Curso que pago" sx={{ margin: "0 10px" }} />
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
          <TextField label="name" sx={{ margin: "0 10px" }} />
          <TextField label="email" sx={{ margin: "0 10px" }} />
          <TextField label="tlf" sx={{ margin: "0 10px" }} />
          <TextField label="date" sx={{ margin: "0 10px" }} />
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
          <TextField label="Tipo de pago" sx={{ margin: "0 10px" }} />
          <TextField label="Referencia" sx={{ margin: "0 10px" }} />
          <TextField label="Monto" sx={{ margin: "0 10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0rem",
          }}
        >
          <Button variant="contained" color="success" sx={{ margin: "0 1rem" }}>
            Aceptar
          </Button>
          <Button variant="contained" color="error">
            Rechazar
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default ConfirmPaid;
