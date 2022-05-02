import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import InputButton from '../../../../../components/common/Forms/FormButton';
import Input from '../../../../../components/common/Forms/Inputs';
import Select from '../../../../../components/common/Forms/Selects';
import Textarea2 from '../../../../../components/common/Forms/TextArea2';
import { BoxButton } from '../../../../Access/Login/style';
import { Formulario, LeftSide, RightSide } from '../../CreateCourse/styled';
import { Container, OneLine } from './styles';

const General = () => {
  const courseID = useParams().courseId;
  const { courses } = useSelector((state) => state.courses);
  const {
    title,
    description,
    price,
    duration,
    category,
    level,
    status,
    premium,
    premiumPrice,
    own,
  } = courses.find((course) => course.id === courseID);

  const INITIAL_VALUES = {
    title: title,
    description: parse(description),
    price: price, //tipo number
    duration: duration, //tipo number
    category: category, //select
    level: level, //select - PRINCIPIANTE/INTERMEDIO/AVANZADO
    status: status, //select - ACTIVO/INACTIVO/BORRADOR
    premium: premium, //select- yes/no - hace referencia de un booleano
    premiumPrice: premiumPrice, //tipo number
    own: own, //select -true/false
  };

  return (
    <Container>
      <Formik initialValues={INITIAL_VALUES}>
        <Form>
          <Formulario>
            <LeftSide>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                margin="5px 0"
                alignItems="flex-end"
                errorPadding="0 0 0 calc(100% - 75%)"
              />

              <Select
                name="level"
                text="Nivel"
                options={['PRINCIPIANTE', 'INTERMEDIO', 'AVANZADO']}
                alignItems="flex-end"
                margin="5px 0"
                errorPadding="0 0 0 calc(100% - 75%)"
              />
              <Select
                name="premium"
                text="Premium"
                options={['Si', 'No']}
                label={['Si', 'No']}
                alignItems="flex-end"
                margin="5px 0"
                errorPadding="0 0 0 calc(100% - 75%)"
              />
              <Select
                name="status"
                text="Estado del curso"
                options={['ACTIVO', 'INACTIVO', 'BORRADOR']}
                alignItems="flex-end"
                margin="5px 0"
                errorPadding="0 0 0 calc(100% - 75%)"
              />
            </LeftSide>
            <RightSide>
              <OneLine>
                <Input
                  id="duration"
                  name="duration"
                  type="text"
                  placeholder="Duracion del curso (h min)"
                  width="100%"
                  margin="5px 0"
                  alignItems="flex-start"
                  errorPadding="0 0 0 calc(100% - 75%)"
                />
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Precio"
                  margin="5px 0"
                  alignItems="flex-end"
                />
              </OneLine>
              <Select
                name="category"
                text="Categoria"
                options={['TECNOLOGIA', 'SALUD', 'AMBIENTE']}
                alignItems="flex-start"
                margin="5px 0"
              />
              <Input
                id="premiumPrice"
                name="premiumPrice"
                type="number"
                placeholder="Precio Premium"
                margin="5px 0"
                alignItems="flex-start"
              />
              <Select
                name="own"
                text="¿Es propio?"
                options={['Si', 'No']}
                label={['Si', 'No']}
                alignItems="flex-start"
                margin="5px 0"
              />
            </RightSide>
          </Formulario>
          <Textarea2
            id="description"
            name="description"
            placeholder="Descripcion del curso "
          />
          <BoxButton>
            <InputButton
              text="Actualizar informacion del curso"
              width="50%"
              shadow="1px 1px 10px 0px rgb(0, 0, 0, 0.5)"
            />
            <div>{description}</div>
          </BoxButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default General;
