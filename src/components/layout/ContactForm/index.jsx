import React from 'react';
import {
  ContactFormContainer,
  ContactFormInput,
  ContactFormTitle,
} from './styles';

export const ContactForm = () => {
  return (
    <ContactFormContainer>
      <ContactFormTitle>
        <h1>Contacto</h1>
      </ContactFormTitle>
      <ContactFormInput></ContactFormInput>
    </ContactFormContainer>
  );
};
