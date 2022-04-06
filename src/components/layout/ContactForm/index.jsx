import React from 'react';
import {
  ContactFormContainer,
  ContactFormInput,
  ContactFormTitle,
} from './styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const ContactForm = () => {
  return (
    <>
      <ContactFormContainer>
        <ContactFormTitle>
          <h1>Contacto</h1>
        </ContactFormTitle>
        <ContactFormInput>
          <Formik
            initialValues={INITIAL_VALUES}
            validate={validarRegistro}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container columnSpacing={2}>
                <Grid xs={12} item lg={6}>
                  <Input
                    label={'Nombre de usuario'}
                    name={'username'}
                    placeholder={'Ingrese el nombre de usuario'}
                  />
                </Grid>

                <Grid xs={12} item lg={6}>
                  <Input
                    label={'Nombres'}
                    name={'nombres'}
                    placeholder={'Ingrese su nombre'}
                  />
                </Grid>

                <Grid xs={12} item lg={6}>
                  <Input
                    label={'Apellidos'}
                    name={'apellidos'}
                    placeholder={'Ingrese sus apellidos'}
                  />
                </Grid>

                <Grid xs={12} item lg={6}>
                  <Input
                    label={'Correo'}
                    name={'email_user'}
                    placeholder={'Ingrese su correo'}
                  />
                </Grid>

                <Grid xs={12} item>
                  <Input
                    label={'Contraseña'}
                    type={'password'}
                    name={'password'}
                  />
                </Grid>

                <Grid xs={12} item>
                  <Input
                    label={'Confirmar Contraseña'}
                    type={'password'}
                    name={'passwordConfirm'}
                  />
                </Grid>
              </Grid>

              <ButtonSubmit>
                Registrarse <CgLogIn />
              </ButtonSubmit>
            </Form>
          </Formik>
        </ContactFormInput>
      </ContactFormContainer>
    </>
  );
};
