import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: #ffffff9d;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: -2px;
  box-sizing: border-box;
  position: absolute;
`;

export const Container = styled.div`
  font-size: 13.5px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  height: 100%;
`;

export const LogoContainer = styled(Container)`
  width: 35%;
  background-color: ${(props) => props.theme.colors.white};
  & > img {
    width: 15rem;
    height: auto;
  }
`;

export const NavbarMenu = styled(Container)`
  width: 65%;
  justify-content: space-evenly;
`;

export const MenuContainer = styled.div``;

export const LoginContainer = styled.div``;

export const NavButton = styled.button`
  background: ${(props) => props.theme.colors.transparent};
  border: none;
  color: ${(props) => props.theme.colors.textBlue};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  & > a {
    color: ${(props) => props.theme.colors.textBlue};
    text-decoration: none;
  }
`;

export const LoginButton = styled(NavButton)``;

export const SignupButton = styled(NavButton)`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.navBlue};
  border-radius: 45px;
  padding: 0.7rem 2rem;
  box-shadow: 3px 6px 16px 4px rgb(0 0 0 / 25%);
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.colors.navBlueHover};
  }
  &:active {
    background: ${(props) => props.theme.colors.navBlueHover};
    transform: translate(2px, 2px);
  }
`;
