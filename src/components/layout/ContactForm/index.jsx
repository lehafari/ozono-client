import React from 'react';
import {
  ContactFormContainer,
  ContactFormInput,
  ContactFormTitle,
  ErrorMessage,
  InputTextAreaField,
  InputTextField,
  LabelText,
} from './styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '../../common/Buttons/MainButton';

export const ContactForm = () => {
  const validationSchema = yup.object({
    name: yup.string('Enter your name').required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    message: yup
      .string('Enter your message')
      .min(8, 'Message should be of minimum 8 characters length')
      .required('Message is required'),
  });

  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <ContactFormContainer>
        <ContactFormTitle>
          <h1>Contacto</h1>
        </ContactFormTitle>
        <ContactFormInput>
          <formContainer onSubmit={handleSubmit}>
            <LabelText>Name</LabelText>
            <InputTextField
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage>{touched.name && errors.name}</ErrorMessage>
            <LabelText>Correo</LabelText>
            <InputTextField
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <ErrorMessage>{touched.email && errors.email}</ErrorMessage>
            <LabelText>Mensaje</LabelText>
            <InputTextAreaField
              id="message"
              name="message"
              type="textarea"
              value={values.message}
              onChange={handleChange}
            />
            <ErrorMessage>{touched.message && errors.message}</ErrorMessage>
            <Button
              backgroundColor="#4B9CC2"
              text="Enviar"
              width="80%"
              padding="1rem 1rem"
              type="submit"
              margin="1rem auto"
              alignSelf="center"
            />
          </formContainer>
        </ContactFormInput>
      </ContactFormContainer>
    </>
  );
};
