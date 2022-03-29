import {
  LoginContainer,
  LogoContainer,
  MenuContainer,
  NavbarContainer,
  NavbarMenu,
} from "./styles";
import cenaozLogo from "../../../assets/images/cenaoz-logo.webp";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "Jorgito Candelero" },
    };
    dispatch(action);
    // console.log("FUNCIONA");
    navigate("/profile");
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={cenaozLogo} alt="cenaoz" />
      </LogoContainer>
      <NavbarMenu>
        <MenuContainer></MenuContainer>
        <LoginContainer>
          <Button> {user.name} </Button>
          <Button onClick={handleLogin}>LOGIN</Button>
        </LoginContainer>
      </NavbarMenu>
    </NavbarContainer>
  );
};
