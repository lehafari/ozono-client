import React, { useState } from "react";
import { Box, Container, Pagination, Typography } from "@mui/material";
import ConfirmPaid from "./ConfirmPaid";

const PendingPayments = ({ flag, setFlag, loading, payments, dispatch }) => {
  //*Paginacion
  const [page, setPage] = useState(1); //pagina actual
  const n = 6; //Numero de elementos por paginas
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
          height: "75%",
        }}
      >
        {/* //* header del historial de compras */}
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Pagos Pendientes por procesar
        </Typography>

        {/* //* Contenido del historial de compras */}
        <Box
          sx={{
            margin: "1.5rem 0rem",
            height: "70%",
          }}
        >
          {itemList[page].map((item, i) => {
            return (
              item.payment.paymentStatus === "PENDING" && (
                <Box
                  key={item.payment.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "1rem 0rem",
                  }}
                >
                  <Typography sx={{ width: "16%", flexShrink: 0 }}>
                    {i + 1}
                  </Typography>
                  <Typography sx={{ width: "16%", flexShrink: 0 }}>
                    {item.course.title}
                  </Typography>
                  <Typography sx={{ width: "16%", flexShrink: 0 }}>
                    {item.payment.createdAt}
                  </Typography>
                  <Typography sx={{ width: "16%", flexShrink: 0 }}>
                    {item.payment.amount}
                  </Typography>
                  <Typography sx={{ width: "16%", flexShrink: 0 }}>
                    {item.payment.paymentStatus}
                  </Typography>
                  <Box sx={{ width: "16%", flexShring: 0 }}>
                    <ConfirmPaid
                      flag={flag}
                      setFlag={setFlag}
                      loading={loading}
                      data={item}
                      dispatch={dispatch}
                    />
                  </Box>
                </Box>
              )
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
export default PendingPayments;
