import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.titleBlue};
  font-size: 4rem;
`;
