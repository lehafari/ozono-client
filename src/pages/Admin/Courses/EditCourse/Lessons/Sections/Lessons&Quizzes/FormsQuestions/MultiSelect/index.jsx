import { Box, Button, Container } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

import Input from "components/common/Forms/Inputs";
import InputButton from "components/common/Forms/FormButton";

const MultiSelect = () => {
  const [first, setfirst] = useState([]);
  const [radioValue, setRadioValue] = useState(new Array(first.length));
  console.log(radioValue);

  const Counter = () => {
    setfirst([...first, first.length + 1]);
  };

  //*form*//
  const INITIAL_VALUES = new Object();
  INITIAL_VALUES.question = "";
  INITIAL_VALUES.answer = "";
  for (let i = 0; i < first.length; i++) {
    INITIAL_VALUES[`option${i}`] = "";
  }
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <span style={{ width: "100%", fontSize: "25px", margin: "10px 0px" }}>
          Tipo de prueba: Seleccion Multiple
        </span>
      </Box>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              id="question"
              name="question"
              type="text"
              placeholder="Pregunta"
              margin="5px 0px"
              width="100%"
            />
            <Button
              sx={{
                margin: "10px auto",
              }}
              variant="contained"
              color="primary"
              onClick={Counter}
            >
              Agregar respuesta
            </Button>

            {first.map((item, i) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Input
                      key={i}
                      id={`option${item}`}
                      name={`option${item}`}
                      type="text"
                      placeholder={`Opcion ${item}`}
                      margin="5px 0px"
                      width="100%"
                      padding="0px 10px"
                      radioValue={radioValue}
                      setRadioValue={setRadioValue}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <label key={i}>
                      <input
                        key={i}
                        type="radio"
                        id="answer"
                        name="answer"
                        value="ola"
                        required
                      />
                      correcta
                    </label>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default MultiSelect;
