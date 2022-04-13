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
  padding: 20px 0 0 60px;
`;

export const Box = styled.div`
  width: 100%;
  padding: 0px 0 0 0px;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  height: 1px;
  width: 80%;
  margin: 10px 0px;
  background-color: #3daecc;
`;

export const BoxButton = styled.div``;

export const BoxOptions = styled.div`
  & > button {
    text-align: center;
    margin: 10px 0px;
  }
`;
