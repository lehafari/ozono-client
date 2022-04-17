import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../../../components/common/Inputs";
import { NavButton } from "../../../components/common/Navbar/styles";
import {
  Container,
  Formulario,
  Box,
  Divider,
  BoxButton,
  BoxOptions,
} from "./style";
import InputButton from "../../../components/common/Buttons/FormButton";
import * as Yup from "yup";

import { startLogin } from "../../../actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  // const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    userOrEmail: "",
    password: "",
  };

  const validationSchema = Yup.object({
    userOrEmail: Yup.string()
      .required("El usuario o Email es obligatorio")
      .min(4, "El usuario o Email debe tener al menos 4 caracteres")
      .max(50, "El usuario o Email debe tener máximo 50 caracteres"),
    password: Yup.string()
      .min(6, "la contraseña debe tener al menos 6 caracteres")
      .max(20, "la contraseña debe tener máximo 20 caracteres")
      .required("La contraseña es obligatoria"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    dispatch(startLogin(values.userOrEmail, values.password));
    navigate("/profile");
  };

  return (
    <Container>
      <h1>Iniciar sesión</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Formulario>
            <Input
              id="userOrEmail"
              name="userOrEmail"
              type="text"
              placeholder="Usuario o Email"
              margin="5px 0"
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
            ></Input>

            <Box>
              <BoxButton>
                <InputButton text="Iniciar Sesión" width="70%" />
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
          </Formulario>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
