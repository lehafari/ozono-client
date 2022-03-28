import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background: ${(props) => props.theme.colors.headerBlue};
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
`;

export const MenuContainer = styled.div``;

export const LoginContainer = styled.div``;
