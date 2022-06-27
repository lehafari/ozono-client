import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import InputButton from 'components/common/Forms/FormButton';
import { Dialog } from 'primereact/dialog';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import * as Yup from 'yup';

import { Form } from './styles';
import { formatYupErrors } from 'helpers/formatYupErrors';
import { startCreatePayment } from 'actions/payments';
import Toast from 'components/common/Popup/Toast';
import Transfer from './TypePaids/Transfer';
import Cash from './TypePaids/Cash';
import PaidMobile from './TypePaids/PaidMobile';
import { fetchWithToken } from 'helpers/fetch';
import { endPoints } from 'const/endPoints';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PaymenGateway = (props) => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const navigate = useNavigate();
  // Estado del modal
  const [visible, setVisible] = useState(null);
  // Estado del formulario
  const [values, setValues] = useState({
    paymentMethod: '',
    amount: props.amount,
    paymentReference: '',
    courseId: props.courseId,
  });
  //Estado de los errores del formulario
  const [error, setError] = useState(null);
  const [paymentAccount, setPaymentAccount] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const getPaymentAccount = async () => {
    const res = await fetchWithToken(endPoints.payment_get_account);
    const body = await res.json();
    if (res.status === 200) {
      setPaymentAccount(body);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error === null) {
      props.setLoading(true);
      const body = await startCreatePayment(values);
      if (!body.statusCode) {
        props.setLoading(false);
        Toast('success', 'Datos del pago enviados con exito');
        setVisible(false);
      } else {
        Toast('error', body.message);
      }
    }
  };

  //*Validaciones del formulario//
  const validationSchema = Yup.object().shape({
    paymentMethod: Yup.string().required('Seleccione el tipo de pago'),
    paymentReference: Yup.string().required(
      'Ingrese el numero de referencia del pago'
    ),
  });

  useEffect(() => {
    getPaymentAccount();
  }, []);

  useEffect(() => {
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => setError(null))
      .catch((err) => setError(err));
  }, [values]);

  return (
    <>
      <InputButton
        text={user ? 'Pagar' : 'Registrarse'}
        onClick={
          user ? () => setVisible(true) : () => navigate('/access/login')
        }
        fontSize={'1.5rem'}
        padding={'2rem 4rem'}
        alignItems={'center'}
        display={'flex'}
      />

      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        header="Pasarela de pago"
        draggable={false}
        resizable={false}
        style={{
          width: '80vw',
          height: '90vh',
        }}
      >
        <Box>
          {/* //* Titulo de la compra */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ margin: '1rem 0rem' }}>
              {props.cleanTitle}
            </Typography>
          </Box>
          {/* //* Formulario */}
          <Form onSubmit={handleSubmit}>
            <Typography variant="h5">Metodos de pago</Typography>
            {/* Contendor del grupo completo de inputs radio */}
            <Box
              sx={{
                margin: '2rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="paymentMethod"
                  value={values.paymentMethod}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="TRANSFERENCIA"
                    control={<Radio />}
                    label="Transferencia"
                  />
                  <FormControlLabel
                    value="PAGO_MOVIL"
                    control={<Radio />}
                    label="Pago Movil"
                  />
                  <FormControlLabel
                    value="EFECTIVO"
                    control={<Radio />}
                    label="Efectivo"
                  />
                </RadioGroup>
                {error && formatYupErrors(error.inner, 'typePaid') && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {formatYupErrors(error.inner, 'typePaid').message}
                  </span>
                )}
              </FormControl>
            </Box>
            {/* Plantilla que se va a mostrar segun el tipo de pago */}
            {values.paymentMethod === 'TRANSFERENCIA' && (
              <Transfer amount={props.amount} account={paymentAccount} />
            )}
            {values.paymentMethod === 'PAGO_MOVIL' && (
              <PaidMobile amount={props.amount} account={paymentAccount} />
            )}
            {values.paymentMethod === 'EFECTIVO' && (
              <Cash amount={props.amount} account={paymentAccount} />
            )}
            {values.paymentMethod === '' && null}

            {/* Input para meter la Ref */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem 0',
              }}
            >
              <TextField
                label="Ingrese el numero de referencia del pago"
                name="paymentReference"
                value={values.paymentReference}
                onChange={handleChange}
                sx={{
                  width: '80%',
                }}
              />
            </Box>
            {error && formatYupErrors(error.inner, 'paymentReference') && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                {formatYupErrors(error.inner, 'paymentReference').message}
              </span>
            )}
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  margin: '0 5px ',
                }}
              >
                Nota:
              </Typography>
              <Typography>
                El pago sera aprobado luego de ser verificado. Esto puedo tardar
                72h
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem ',
              }}
            >
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!values.paymentMethod || !values.paymentReference}
              >
                Comprar
              </Button>
            </Box>
          </Form>
        </Box>
      </Dialog>
    </>
  );
};

export default PaymenGateway;
