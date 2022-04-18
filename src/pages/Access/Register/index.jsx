import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Inputs";
import {
  Box,
  BoxButton,
  BoxOptions,
  Divider,
  Formulario,
} from "../Login/style";
import { ContainerRegistro } from "./styles";
import { endPoints } from "../../../const/endPoints";
import InputButton from "../../../components/common/Buttons/FormButton";
import { types } from "../../../context/types/types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startRegister } from "../../../actions/auth";
import { NavButtonContainer } from "../Login/style";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("El nombre es obligatorio"),
    lastName: Yup.string().required("El apellido es obligatorio"),
    username: Yup.string()
      .required("El usuario es obligatorio")
      .min(4, "El usuario debe tener al menos 4 caracteres")
      .max(20, "El usuario debe tener máximo 50 caracteres"),
    password: Yup.string()
      .min(6, "la contraseña debe tener al menos 6 caracteres")
      .max(20, "la contraseña debe tener máximo 20 caracteres")
      .required("La contraseña es obligatoria"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Las contraseñas no coinciden"
    ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(startRegister(values));
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
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
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Nombre"
              width={"65%"}
              heigth={"40px"}
              margin={"10px 0px"}
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Apellido"
              width={"65%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Usuario"
              width={"65%"}
              heigth={"40px"}
              margin={"10px 0px"}
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              width={"65%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              width={"65%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirmar Contraseña"
              width={"65%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Box>
              <BoxButton>
                <InputButton text="Registrarse" width="70%" />
              </BoxButton>
              <BoxOptions>
                <NavButtonContainer
                  color="#797979"
                  fontSize="1.2rem"
                  fontWeight="300"
                >
                  <Link to="/access/login">Iniciar sesion</Link>
                </NavButtonContainer>
              </BoxOptions>
            </Box>
          </Formulario>
        </Form>
      </Formik>
    </ContainerRegistro>
  );
};

export default Register;
