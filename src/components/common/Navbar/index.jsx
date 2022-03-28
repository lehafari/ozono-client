import {
  LoginContainer,
  LogoContainer,
  MenuContainer,
  NavbarContainer,
  NavbarMenu,
} from './styles';
import cenaozLogo from '../../../assets/images/cenaoz-logo.webp';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={cenaozLogo} alt="cenaoz" />
      </LogoContainer>
      <NavbarMenu>
        <MenuContainer>
          <Link to="/">Home</Link>
          <Link to="/clasroom">ClassRoom</Link>
        </MenuContainer>
        <LoginContainer>
          <Button></Button>
          <Button></Button>
        </LoginContainer>
      </NavbarMenu>
    </NavbarContainer>
  );
};
