import {
  LoginButton,
  LoginContainer,
  LogoContainer,
  MenuContainer,
  MobileMenuContainer,
  NavbarContainer,
  NavbarMenu,
  NavButton,
  SignupButton,
} from './styles';
import cenaozLogo from '../../../assets/images/cenaoz-logo.webp';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { WindowSharp } from '@mui/icons-material';
import MobileMenu from '../MobileMenu';
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

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth;
      setWidth(width);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={cenaozLogo} alt="cenaoz" />
      </LogoContainer>
      {width > 920 ? (
        <NavbarMenu>
          <MenuContainer>
            <NavButton>
              <Link to="/">Home</Link>
            </NavButton>
            <NavButton>
              <Link to="/classroom">Cursos</Link>
            </NavButton>
            <NavButton>
              <Link to="/contact">Contacto</Link>
            </NavButton>
          </MenuContainer>
          <LoginContainer>
            <LoginButton onClick={handleLogin}>Iniciar Sesion </LoginButton>
            <SignupButton>Registrarse</SignupButton>
          </LoginContainer>
        </NavbarMenu>
      ) : (
        <MobileMenuContainer>
          <MobileMenu />
        </MobileMenuContainer>
      )}
    </NavbarContainer>
  );
};
