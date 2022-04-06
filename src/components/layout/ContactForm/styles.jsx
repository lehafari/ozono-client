import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 30%;
  height: 500px;
  border-radius: 45px;
  box-shadow: 0px 13px 99px rgba(4, 12, 105, 0.04);
`;

export const ContactFormTitle = styled.div`
  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const ContactFormInput = styled.div``;
