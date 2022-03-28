import {
  LoginContainer,
  LogoContainer,
  MenuContainer,
  NavbarContainer,
  NavbarMenu,
} from './styles';
import cenaozLogo from '../../../assets/images/cenaoz-logo.webp';
import { Button } from '@material-ui/core';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={cenaozLogo} alt="cenaoz" />
      </LogoContainer>
      <NavbarMenu>
        <MenuContainer></MenuContainer>
        <LoginContainer>
          <Button></Button>
          <Button></Button>
        </LoginContainer>
      </NavbarMenu>
    </NavbarContainer>
  );
};
