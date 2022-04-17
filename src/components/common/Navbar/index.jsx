import {
  AvatarContainer,
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
import profileImage from '../../../assets/images/profile-image.svg';
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../auth/authContext";
// import { types } from "../../../types/types";
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../MobileMenu';
import Resize from '../../../helpers/Resize';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
export const Navbar = () => {
  const width = Resize();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

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
          {!user ? (
            <LoginContainer>
              <LoginButton onClick={() => navigate('/access/login')}>
                Iniciar Sesion
              </LoginButton>
              <SignupButton onClick={() => navigate('/access/register')}>
                Registrarse
              </SignupButton>
            </LoginContainer>
          ) : (
            <AvatarContainer>
              <Avatar
                alt="Remy Sharp"
                src={profileImage}
                sx={{
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/profile')}
              />
              <h1>{user.username}</h1>
            </AvatarContainer>
          )}
        </NavbarMenu>
      ) : (
        <MobileMenuContainer>
          <MobileMenu />
        </MobileMenuContainer>
      )}
    </NavbarContainer>
  );
};
