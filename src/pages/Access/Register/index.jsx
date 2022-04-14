import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Inputs";
import { Box, BoxButton, Formulario } from "../Login/style";
import { ContainerRegistro } from "./styles";
import { endPoints } from "../../../const/endPoints";
import InputButton from "../../../components/common/Buttons/FormButton";
import { GetUser } from "../../../helpers/GetUser";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { types } from "../../../context/types/types";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   const action = {
  //     type: types.login,
  //     payload: { name: "Jorgito Candelero" },
  //   };
  //   dispatch(action);
  //   // console.log("FUNCIONA");
  //   navigate("/profile");
  // };

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
      const res = await fetch(endPoints.signup, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.status === 200) {
        console.log("Seteando tokens");
        localStorage.setItem("at", data.access_token);
        localStorage.setItem("rt", data.refresh_token);

        const userData = await GetUser();
        console.log(userData);
        const action = {
          type: types.login,
          payload: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
            email: userData.email,
            gender: userData.gender,
            country: userData.country,
            image: userData.image,
            ci: userData.ci,
            phone: userData.phone,
            role: userData.role,
          },
        };
        dispatch(action);
        navigate("/profile");
      }
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
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            />
            <Input
              id="lastName"
              name="lastName"
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
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirmar Contraseña"
              width={"50%"}
              heigth={"40px"}
              margin={"10px 0px"}
            ></Input>

            <Box>
              <BoxButton>
                <InputButton text="Registrarse" width="70%" />
              </BoxButton>
            </Box>
          </Formulario>
        </Form>
      </Formik>
    </ContainerRegistro>
  );
};

export default Register;
