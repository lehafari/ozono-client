import { Box, TextField, Typography } from "@mui/material";
import InputButton from "components/common/Forms/FormButton";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";

const PaymentDetails = () => {
  //*Estado del modal//
  const [display, setDisplay] = useState(false);
  //*Estado del formulario//
  const [values, setValues] = useState({
    ci: "",
    owner: "",
    bankName: "",
    accountType: "",
    accountNumber: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <InputButton text="Datos bancarios" onClick={() => setDisplay(true)} />
      <Dialog
        header="Datos bancarios"
        visible={display}
        onHide={() => setDisplay(false)}
        style={{ width: "60vw", height: "60vh" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ margin: "1rem 0rem" }}>
            DATOS de la cuenta bancaria a la que van a transferir
          </Typography>
          {/* Contenedor completo */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Contenedor izquierdo */}
            <Box
              sx={{
                margin: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <TextField
                  label="Documento de Identidad"
                  name="CI"
                  value={values.CI}
                  onChange={(e) => handleChange()}
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
                  Banco:
                </Typography>
                <Typography>Banco de Venezuela</Typography>
              </Box>
            </Box>
            {/* Contenedor derecho */}
            <Box
              sx={{
                margin: "1rem",
              }}
            >
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
                  Titular:
                </Typography>
                <Typography>Marcel Marin</Typography>
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
                  Cuenta Bancaria:
                </Typography>
                <Typography>0134123456789</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "1rem 0",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                margin: "0 5px ",
              }}
            >
              Monto:
            </Typography>
            <Typography>VES</Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default PaymentDetails;
