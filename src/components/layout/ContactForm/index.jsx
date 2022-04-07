import React from 'react';
import {
  ContactFormContainer,
  ContactFormInput,
  ContactFormTitle,
  InputTextField,
} from './styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';

export const ContactForm = () => {
  const validationSchema = yup.object({
    name: yup.string('Enter your name').required('Name is required'),
    email: yup.string('Enter your email').required('Email is required'),
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
  console.log(values);
  return (
    <>
      <ContactFormContainer>
        <ContactFormTitle>
          <h1>Contacto</h1>
        </ContactFormTitle>
        <ContactFormInput>
          <form onSubmit={handleSubmit}>
            <InputTextField
              id="name"
              name="name"
              label="Nombre"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <InputTextField
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <InputTextField
              id="message"
              name="message"
              label="Mensaje"
              value={values.message}
              onChange={handleChange}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
            />
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </ContactFormInput>
      </ContactFormContainer>
    </>
  );
};
