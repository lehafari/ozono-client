import { Formik, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/common/Buttons/MainButton";
import Input from "../../../components/common/Inputs";
import { NavButton } from "../../../components/common/Navbar/styles";
import { Container, Form, Box, Divider, BoxButton, BoxOptions } from "./style";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      userorEmail: "",
      password: "",
    },
  });
  const handlesubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Iniciar sesión</h1>
      <Formik initialValues={formik.initialValues} onSubmit={handlesubmit}>
        <Form>
          <Input
            id="userorEmail"
            name="userorEmail:"
            type="text"
            placeholder="Usuario o Email"
          />
          <Input
            id="password"
            name="password:"
            type="password"
            placeholder="Contraseña"
          ></Input>

          <Box>
            <BoxButton>
              <Button text="Iniciar Sesión" width="70%" />
            </BoxButton>
            <BoxOptions>
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="/access/register">Registrate</Link>
              </NavButton>
              <Divider />
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="*">Olvidé mi contraseña</Link>
              </NavButton>
            </BoxOptions>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
