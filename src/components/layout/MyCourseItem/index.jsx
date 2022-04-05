import {
  CoruseDescription,
  CourseButton,
  CourseContainer,
  CourseContend,
  CourseImage,
  CourseInstructor,
  CoursePrice,
  CourseTitle,
} from './styles';

import courseImage from '../../../assets/images/course-image.png';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '../../common/Buttons/MainButton';
import { Divider } from '@mui/material';

export const MyCourseItem = () => {
  return (
    <CourseContainer>
      <CourseImage>
        <img src={courseImage} alt="course" />
      </CourseImage>
      <CourseContend>
        <CourseTitle>
          <h1>Ozonoterapeuta Clinico</h1>
        </CourseTitle>
        <CoruseDescription>
          <p>Curso de ampliación (Fellowship)</p>
        </CoruseDescription>
        <Divider
          sx={{
            margin: '2rem 0 0.5rem 0',
            backgroundColor: '#6385B8',
          }}
        />
        <CourseInstructor>
          <h3>Prf. Alberto gonzalez</h3>
          <p>Licenciado en Desarrollo web</p>
        </CourseInstructor>
        <Button text="Ver Curso" width="%100" />
      </CourseContend>
    </CourseContainer>
  );
};
