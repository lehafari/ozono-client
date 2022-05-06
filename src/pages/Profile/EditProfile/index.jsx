import { Formik, Form } from 'formik';
import { Dropdown } from 'primereact/dropdown';

import { BoxButton, Formulario, LeftSide, RightSide } from './styles';
import Input from '../../../components/common/Forms/Inputs/';
import { useDispatch, useSelector } from 'react-redux';
import InputButton from '../../../components/common/Forms/FormButton';
import { useState } from 'react';
import { countries } from '../../../const/countries';
import { fetchWithToken } from '../../../helpers/fetch';
import { endPoints } from '../../../const/endPoints';
import { startChecking } from '../../../actions/auth';
import PopupOk from '../../../components/common/Popup/PopupOk';
import PopupError from '../../../components/common/Popup/PopupError';

export const EditProfile = () => {
  const dispatch = useDispatch();
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

  const handleSubmit = async (values) => {
    dispatch(startChecking());
    const updatedUser = await fetchWithToken(
      endPoints.update_user,
      values,
      'PUT'
    );
    const data = await updatedUser.json();
    if (updatedUser.status === 200) {
      PopupOk('22rem', 'success', 'Perfil actualizado');
      dispatch(startChecking());
    } else {
      PopupError(data.message);
    }
  };

  //  ** "firstName": "string22",
  //   **"lastName": "string",
  //   **"username": "strin2g",
  //   **"email": "user2@example.com",
  //   **"country": "string",
  //   **"gender": "string",
  //   **"phone": null,
  //   **"ci": null
  //   "image": "false",

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
                placeholder={country ? country : 'Selecciona un pais'}
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

              {/***** GENERO  ******/}
              {/* <Dropdown
                value={selectedCountry}
                options={[
                  { name: 'Hombre' },
                  { name: 'Mujer' },
                  { name: 'Otro' },
                ]}
                onChange={onCountryChange}
                optionLabel="name"
                showClear
                filterBy="name"
                placeholder="Selecciona tu genero"
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
                id="gender"
                name="gender"
                type="hidden"
                inheritValue={selectedCountry}
              ></Input> */}

              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="Número de teléfono"
                width={'75%'}
                heigth={'50px'}
                margin={'10px 0px'}
                errorPadding="0 0 0 15%"
                backgroundColor={'#fff'}
              ></Input>
              <Input
                id="ci"
                name="ci"
                type="string"
                placeholder="Cédula de identidad"
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
