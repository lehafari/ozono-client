import { Divider, Snackbar } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Dialog } from 'primereact/dialog';

import {
  ButtonsContainer,
  CoruseDescription,
  CourseButton,
  CourseContainer,
  CourseContend,
  CourseImage,
  CourseInstructor,
  CoursePrice,
  CourseTitle,
  Formulario,
} from './styles';
import courseImage from '../../../../assets/images/course-image.png';
import { Button } from '../../../../components/common/Buttons/MainButton';
import { useEffect, useState } from 'react';
import { fetchWithToken } from '../../../../helpers/fetch';
import { endPoints } from '../../../../const/endPoints';
import InputButton from '../../../../components/common/Forms/FormButton';
import { Form, Formik } from 'formik';
import Input from '../../../../components/common/Forms/Inputs';
import { startDelete } from '../../../../actions/courses';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const AdminCourseItem = ({
  image,
  title,
  createdAt,
  level,
  status,
  id,
}) => {
  const dispatch = useDispatch();

  //** MODAL */
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  //***** Formik */
  const INITIAL_VALUES = {
    password: '',
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    const resp = await dispatch(startDelete(id, values.password));
    if (resp.type === '[courses] Delete')
      Swal.fire({
        icon: 'success',
        title: 'Curso eliminado correctamente',
        showConfirmButton: false,
        timer: 2000,
      });
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error al eliminar el curso',
        text: resp.payload,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    onHide('displayBasic');
  };

  return (
    <CourseContainer>
      <CourseImage>
        <img src={image || courseImage} alt="course" />
      </CourseImage>
      <CourseContend>
        <CourseTitle>
          <h1>{title}</h1>
        </CourseTitle>
        <CoruseDescription>
          <p>{createdAt}</p>
        </CoruseDescription>
        <Divider
          sx={{
            margin: '2rem 0 0.5rem 0',
            backgroundColor: '#6385B8',
          }}
        />
        <CourseInstructor>
          <h3>Nivel: {level}</h3>
          <h3>Estado: {status}</h3>
          <h3></h3>
        </CourseInstructor>
        <ButtonsContainer>
          <Button
            text={<EditIcon />}
            fontSize="1rem"
            width="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
          <Button
            text={<VisibilityIcon />}
            fontSize="1rem"
            width="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
          <InputButton
            text={<HighlightOffIcon />}
            backgroundColor="#ff555b"
            backgroundColorHover="#ff555b"
            fontSize="1rem"
            width="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => onClick('displayBasic')}
          />
          <Dialog
            header="Confirma tu contraseña"
            visible={displayBasic}
            style={{ width: '50vw' }}
            onHide={() => onHide('displayBasic')}
          >
            <p>Si estas seguro de eliminar el curso, confirma tu contraseña:</p>
            <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
              <Form>
                <Formulario>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Confirma tu contraseña"
                  />
                  <InputButton
                    text="Eliminar curso"
                    backgroundColor="#ff555b"
                    backgroundColorHover="#ff555b"
                    fontSize="1rem"
                    width="30%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    alignSelf="center"
                  />
                </Formulario>
              </Form>
            </Formik>
          </Dialog>
        </ButtonsContainer>
      </CourseContend>
    </CourseContainer>
  );
};
