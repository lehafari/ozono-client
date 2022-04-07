import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 35%;
  overflow: hidden;
  height: 500px;
  border-radius: 45px;
  padding-top: 1rem;
  box-shadow: 0px 13px 99px rgba(4, 12, 105, 0.04);
`;

export const ContactFormTitle = styled.div`
  & h1 {
    color: ${(props) => props.theme.colors.headerBlue};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const ContactFormInput = styled.div`
  padding: 1rem;
`;

export const formContainer = styled.form``;

export const LabelText = styled.p`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 1rem;
  margin: 0;
`;

export const InputTextField = styled.input`
  width: fill-available;
  width: -webkit-fill-available;
  border: none;
  background-color: ${(props) => props.theme.colors.lightGrayBackground};
  border-radius: 35px;
  margin: 0.5rem 0;
  padding: 1rem;
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.red};
  margin-bottom: 0.5rem;
`;
