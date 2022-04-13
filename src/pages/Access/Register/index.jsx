import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "../../../components/common/Buttons/MainButton";
import Input from "../../../components/common/Inputs";
import { Box, BoxButton, Formulario } from "../Login/style";
import { ContainerRegistro } from "./styles";

const Register = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  };

  validationSchema = Yup.object({
    firstname: Yup.string()
      .required("El nombre es obligatorio")
      .min(4, "El nombre debe tener al menos 4 caracteres")
      .max(50, "El nombre debe tener máximo 50 caracteres"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <ContainerRegistro>
      <h1>Registrate </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Formulario>
            <Input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Nombre"
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            />
            <Input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Apellido"
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Usuario"
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirmar Contraseña"
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Box>
              <BoxButton>
                <Button text="Registrarse aqui" width="70%" />
              </BoxButton>
            </Box>
          </Formulario>
        </Form>
      </Formik>
    </ContainerRegistro>
  );
};

export default Register;
