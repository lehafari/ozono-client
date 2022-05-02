import { Box } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { Dropdown } from 'primereact/dropdown';

import { BoxButton, Formulario, LeftSide, RightSide } from './styles';
import Input from '../../../components/common/Forms/Inputs/';
import { useSelector } from 'react-redux';
import InputButton from '../../../components/common/Forms/FormButton';
import { useState } from 'react';

export const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const { firstName, lastName, username, email, country, gender, phone, ci } =
    user;

  const initialValues = {
    firstName,
    lastName,
    username,
    email,
    country,
    gender,
    phone,
    ci,
  };

  //*** Select values */
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: 'Australia' },
    { name: 'Brazil' },
    { name: 'China' },
    { name: 'Egypt' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'India' },
    { name: 'Japan' },
    { name: 'Spain' },
    { name: 'United States' },
  ];
  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  };
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.name}</div>
      </div>
    );
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1>Edita tu perfil </h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Formulario>
            <LeftSide>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Primer nombre"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              />
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Segundo nombre"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              />
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Usuario"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              />
            </LeftSide>
            <RightSide>
              <Dropdown
                value={selectedCountry}
                options={countries}
                onChange={onCountryChange}
                optionLabel="name"
                showClear
                filterBy="name"
                placeholder="Select a Country"
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
                style={{
                  width: '75%',
                  heigth: '50px',
                  margin: '10px 0px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '45px',
                  alignSelf: 'center',
                  padding: '0px 15px',
                  boxShadow: 'none',
                }}
              />
              <Input
                id="country"
                name="country"
                type="hidden"
                inheritValue={selectedCountry}
              ></Input>
              <Input
                id="gender"
                name="gender"
                type="text"
                placeholder="Contraseña"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              ></Input>

              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirmar Contraseña"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              ></Input>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirmar Contraseña"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              ></Input>
            </RightSide>
            <BoxButton>
              <InputButton
                text="Actualizar información"
                width="50%"
                shadow="1px 1px 10px 0px rgb(0, 0, 0, 0.5)"
              />
            </BoxButton>
          </Formulario>
        </Form>
      </Formik>
    </>
  );
};
