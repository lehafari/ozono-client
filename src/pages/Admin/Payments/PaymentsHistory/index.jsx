import { Box, Container, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";

const PaymenHistory = ({ payments }) => {
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
          <Typography sx={{ width: "20%", flexShrink: 0 }}>ID</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>Producto</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>Fecha</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>Monto</Typography>
          <Typography sx={{ width: "20%", flexShrink: 0 }}>Estado</Typography>
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
                key={item.payment.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "1rem 0rem",
                }}
              >
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.payment.id.substring(
                    item.payment.id.length - 4,
                    item.payment.id.length
                  )}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.course.title}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.payment.createdAt}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.payment.amount}
                </Typography>
                <Typography sx={{ width: "20%", flexShrink: 0 }}>
                  {item.payment.paymentStatus}
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
