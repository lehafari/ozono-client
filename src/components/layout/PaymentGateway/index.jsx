import { Box, Button, TextField, Typography } from "@mui/material";
import InputButton from "components/common/Forms/FormButton";
import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";
import React, { useState } from "react";
import { Form } from "./styles";
import Transfer from "./TypePaids/Transfer";

const PaymenGateway = (props) => {
  // Estado del modal
  const [visible, setVisible] = useState(null);
  // Estado del formulario
  const [values, setValues] = useState({ typePaid: "" });
  return (
    <>
      <InputButton
        text="Comprar"
        onClick={() => setVisible(true)}
        fontSize={"1.5rem"}
        padding={"2rem 4rem"}
        alignItems={"center"}
        display={"flex"}
      />

      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        header="pasarela de pago"
        draggable={false}
        resizable={false}
        style={{
          width: "70vw",
          height: "90vh",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" sx={{ margin: "1rem 0rem" }}>
              {props.cleanTitle}
            </Typography>
          </Box>
          <Form>
            <Typography variant="h5">Metodos de pago</Typography>
            {/* Contendor del grupo completo de inputs radio */}
            <Box
              sx={{
                margin: "2rem",
                display: "flex",
              }}
            >
              {/* Contenedor individual de inputRadio con label */}
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <RadioButton value="Transferencia" name="typePaid" />
                <Typography sx={{ margin: "0 5px" }}>Transferencia</Typography>
              </Box>
              {/* Contenedor individual de inputRadio con label */}
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <RadioButton value="Pago Movil" name="typePaid" />
                <Typography sx={{ margin: "0 5px" }}>Pago Movil</Typography>
              </Box>
              {/* Contenedor individual de inputRadio con label */}
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <RadioButton value="Efectivo" name="typePaid" />
                <Typography sx={{ margin: "0 5px" }}>Efectivo</Typography>
              </Box>
            </Box>
            <Transfer />
            {/* Input para meter la Ref */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: "1rem 0",
              }}
            >
              <TextField
                label="Ingrese el numero de referencia del pago"
                sx={{
                  width: "80%",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  margin: "0 5px ",
                }}
              >
                Nota:
              </Typography>
              <Typography>
                El pago sera aprobado luego de ser verificado. Esto puedo tardar
                72h
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem ",
              }}
            >
              <Button variant="contained">Comprar</Button>
            </Box>
          </Form>
        </Box>
      </Dialog>
    </>
  );
};

export default PaymenGateway;
