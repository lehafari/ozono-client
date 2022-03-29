import {
  LoginButton,
  LoginContainer,
  LogoContainer,
  MenuContainer,
  NavbarContainer,
  NavbarMenu,
  NavButton,
  SignupButton,
} from './styles';
import cenaozLogo from '../../../assets/images/cenaoz-logo.webp';

import { useContext } from 'react';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';
import { Link, useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Jorgito Candelero' },
    };
    dispatch(action);
    // console.log("FUNCIONA");
    navigate('/profile');
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={cenaozLogo} alt="cenaoz" />
      </LogoContainer>
      <NavbarMenu>
        <MenuContainer>
          <NavButton color="inherit">
            <Link to="/">Home</Link>
          </NavButton>
          <NavButton color="inherit">
            <Link to="/classroom">Classroom</Link>
          </NavButton>
          <NavButton color="inherit">
            <Link to="/contact">Contacto</Link>
          </NavButton>
        </MenuContainer>
        <LoginContainer>
          <LoginButton onClick={handleLogin}>Iniciar Sesion </LoginButton>
          <SignupButton>Registrarse</SignupButton>
        </LoginContainer>
      </NavbarMenu>
    </NavbarContainer>
  );
};
