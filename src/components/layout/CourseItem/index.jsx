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

import courseImage from '../../../assets/images/hero-image.png';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '../../common/Buttons/MainButton';

export const CourseItem = ({
  price,
  numberOfStudents,
  duration,
  title,
  level,
  id,
  description,
}) => {
  const getWidth = () => {
    return window.innerWidth;
  };

  // texto enriquecido a texto plano
  const text = description.replace(/<[^>]*>?/gm, '');

  return (
    <CourseContainer>
      <CourseImage>
        <img src={courseImage} alt="course" />
      </CourseImage>
      <CourseContend>
        <CourseTitle>
          <h1>{title}</h1>
        </CourseTitle>
        <CoruseDescription>
          <p>Duracion del curso: {duration}</p>
          <p>Nivel: {level}</p>
          {text}
        </CoruseDescription>
        <CoursePrice>
          <p>
            <PersonIcon
              sx={{
                color: '#898989',
              }}
              fontSize="large"
            />
            {numberOfStudents}
          </p>
          <p>{price}$</p>
        </CoursePrice>
        <CourseInstructor>
          <h3>Prf. Alberto gonzalez</h3>
          <p>Licenciado en Desarrollo web</p>
        </CourseInstructor>
        <Button
          text="Ver Curso"
          path={`/course/${id}`}
          width="50%"
          alignSelf={getWidth() < 600 ? 'center' : ''}
          fontSize={getWidth() < 600 ? '1rem' : ''}
        />
      </CourseContend>
    </CourseContainer>
  );
};
