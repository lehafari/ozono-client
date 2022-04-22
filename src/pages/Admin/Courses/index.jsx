import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Button } from '../../../components/common/Buttons/MainButton';
import {
  ButtonContainer,
  ButtonsContainer,
  CardContainer,
  Container,
} from './style';
import { useEffect, useState } from 'react';
import { endPoints } from '../../../const/endPoints';
import { fetchWithToken } from '../../../helpers/fetch';
import { AdminCourseItem } from './CourseItem';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const req = await fetchWithToken(endPoints.get_all_courses);
      const body = await req.json();
      setCourses(body);
    };
    getCourses();
  }, []);

  return (
    <Container>
      <Outlet />
      <ButtonsContainer>
        <ButtonContainer>
          <Button path="/admin/create-course" text="Crear Curso" />
        </ButtonContainer>
      </ButtonsContainer>

      <CardContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          {courses.map((data) => (
            <AdminCourseItem key={data.id} {...data} />
          ))}
        </Box>
      </CardContainer>
    </Container>
  );
};

export default Courses;
