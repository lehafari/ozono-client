import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #ffffff;
  padding: 40px 0 0 0px;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  & h1 {
    padding: 0px 0 0 60px;
    font-size: 3rem;
    margin: 0;
    color: ${(props) => props.theme.colors.titleBlue};
  }
`;

export const Formulario = styled.div`
  width: 100%;
  padding: 20px 0 0 0px;
  margin: auto;
`;

export const Box = styled.div`
  width: 100%;
  padding: 0px 0 0 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  height: 1px;
  width: 80%;
  margin: 10px 0px;
  background-color: #3daecc;
`;

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    text-align: center;
    margin: 10px 0px;
  }
`;

export const NavButtonContainer = styled.div`
  background: ${(props) => props.theme.colors.transparent};
  border: none;
  color: ${(props) => props.color || props.theme.colors.textBlue};
  font-family: "Lato", sans-serif;
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "600"};
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  & > a {
    color: ${(props) => props.color || props.theme.colors.textBlue};
    text-decoration: none;
    transition: all 0.3s;
  }
  & > a:hover {
    color: #5373b2;
    font-weight: 600;
  }
`;
