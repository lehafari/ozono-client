import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background: rgb(88, 102, 173);
  background: -moz-linear-gradient(
    90deg,
    rgba(88, 102, 173, 1) 0%,
    rgba(83, 137, 184, 1) 55%,
    rgba(55, 176, 207, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(88, 102, 173, 1) 0%,
    rgba(83, 137, 184, 1) 55%,
    rgba(55, 176, 207, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(88, 102, 173, 1) 0%,
    rgba(83, 137, 184, 1) 55%,
    rgba(55, 176, 207, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5866ad",endColorstr="#37b0cf",GradientType=1);
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: -2px;
  box-sizing: border-box;
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
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  & > a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`;

export const LoginButton = styled(NavButton)``;

export const SignupButton = styled(NavButton)`
  background: ${(props) => props.theme.colors.navBlue};
  border-radius: 45px;
  padding: 0.7rem 2rem;
  box-shadow: 3px 6px 16px 4px rgb(0 0 0 / 25%);
  &:hover {
    background: ${(props) => props.theme.colors.navBlueHover};
  }
`;
