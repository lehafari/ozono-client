import { Box, Container, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";

const PaymenHistory = ({ payments }) => {
  console.log("que hay por ahi?", payments);
  //*Paginacion
  const [page, setPage] = useState(1); //pagina actual
  const n = 9; //Numero de elementos por paginas
  const totalPages = Math.ceil(payments.length / n) + 1; //total de paginas

  const handleChange = (event, value) => {
    setPage(value);
  };
  //*Funcion para listar los usuarios por pagina
  const setitemsInPage = () => {
    let pagination = {};
    let j = 0;
    for (let i = 1; i <= totalPages; i++) {
      pagination[i] = payments.slice(j * n, j * n + n);
      j++;
    }

    return pagination;
  };
  const itemList = setitemsInPage();

  return (
    <>
      <Container
        sx={{
          padding: "2rem 0",
          height: "70%",
        }}
      >
        {/* //* header del historial de compras */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography sx={{ width: "20%", flexShrink: 0 }}>#</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>TITLE</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>DATE</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>AMOUNT</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>STATUS</Typography>
        </Box>

        {/* //* Contenido del historial de compras */}
        <Box
          sx={{
            margin: "1.5rem 0rem",
            height: "70%",
          }}
        >
          {itemList[page].map((item, i) => {
            return (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "1rem 0rem",
                }}
              >
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {i + 1}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  curso {i + 1}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.createdAt}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.amount}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.paymentStatus}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <Pagination
            count={totalPages - 1}
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </>
  );
};

export default PaymenHistory;
