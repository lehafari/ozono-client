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
} from './styles';

import courseImage from '../../../../assets/images/course-image.png';
import { Button } from '../../../../components/common/Buttons/MainButton';
import { Divider } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect, useState } from 'react';
import { fetchWithToken } from '../../../../helpers/fetch';
import { endPoints } from '../../../../const/endPoints';

export const AdminCourseItem = ({
  image,
  title,
  createdAt,
  level,
  status,
  id,
}) => {
  const [students, setStudents] = useState('');

  useEffect(() => {
    const getStudents = async () => {
      const req = await fetchWithToken(`${endPoints.get_students}/${id}`);
      const body = await req.json();
      setStudents(body);
    };
    getStudents();
  }, []);

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
          <h3>Estudiantes: {students.length ? students.length : 0}</h3>
        </CourseInstructor>
        <ButtonsContainer>
          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
            text="Editar curso"
            fontSize="0.9rem"
            width="60%"
          />
          <Button
            text={<HighlightOffIcon />}
            backgroundColor="#ff555b"
            backgroundColorHover="#ff555b"
            fontSize="1rem"
            width="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
        </ButtonsContainer>
      </CourseContend>
    </CourseContainer>
  );
};
