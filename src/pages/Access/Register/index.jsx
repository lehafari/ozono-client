import { Formik, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/common/Buttons/MainButton";
import Input from "../../../components/common/Inputs";
import { NavButton } from "../../../components/common/Navbar/styles";
import { Box, BoxButton, BoxOptions, Form } from "../Login/style";
import { ContainerRegistro } from "./styles";

const Register = () => {
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
    <ContainerRegistro>
      <h1>Registrate </h1>
      <Formik initialValues={formik.initialValues} onSubmit={handlesubmit}>
        <Form>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="Nombre"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          />
          <Input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Apellido"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          ></Input>

          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Usuario"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          ></Input>
          <Input
            id="userorEmail"
            name="userorEmail:"
            type="text"
            placeholder="Usuario o Email"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          />
          <Input
            id="password"
            name="password:"
            type="password"
            placeholder="Contraseña"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          ></Input>
          <Input
            id="userorEmail"
            name="userorEmail:"
            type="text"
            placeholder="Usuario o Email"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          />
          <Input
            id="password"
            name="password:"
            type="password"
            placeholder="Contraseña"
            width={"50%"}
            heigth={"40px"}
            margin={"5px 0px"}
          ></Input>

          <Box>
            <BoxButton>
              <Button text="Iniciar Sesión" width="70%" />
            </BoxButton>
            <BoxOptions>
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="/access/register">Registrate</Link>
              </NavButton>
            </BoxOptions>
          </Box>
        </Form>
      </Formik>
    </ContainerRegistro>
  );
};

export default Register;
