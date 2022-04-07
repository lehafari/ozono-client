import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 30%;
  height: 500px;
  border-radius: 45px;
  padding-top: 1rem;
  box-shadow: 0px 13px 99px rgba(4, 12, 105, 0.04);
`;

export const ContactFormTitle = styled.div`
  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const ContactFormInput = styled.div`
  padding: 1rem;
`;

export const formContainer = styled.form``;

export const InputTextField = styled(TextField)`
  width: 100% !important;
  border: none !important;

  margin-bottom: 1rem;

  & fieldset {
    border: none !important;
    border-radius: 35px !important;
    background-color: ${(props) => props.theme.colors.lightGrayBackground};
  }

  & div {
    margin-bottom: 1rem !important;
  }
`;
