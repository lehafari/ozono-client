import styled from "styled-components";
import { Container } from "../Login/style";

export const ContainerRegistro = styled(Container)`
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
