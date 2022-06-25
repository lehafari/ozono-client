import { Box, Typography } from "@mui/material";

import React from "react";

const Transfer = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ margin: "1rem 0rem" }}>
        Realice la transferencia a la cuenta bancaria: usando los siguientes
        datos
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
            <Typography
              sx={{
                fontWeight: "bold",
                margin: "0 5px ",
              }}
            >
              Documento de identidad:
            </Typography>
            <Typography>23456789</Typography>
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
        <Typography>{props.amount} VES</Typography>
      </Box>
    </Box>
  );
};

export default Transfer;
