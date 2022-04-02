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

export const CourseItem = () => {
  return (
    <CourseContainer>
      <CourseImage>
        <img src={courseImage} alt="course" />
      </CourseImage>
      <CourseContend>
        <CourseTitle>
          <h1>Pellentesque in libero ﬁnibus</h1>
        </CourseTitle>
        <CoruseDescription>
          <p>
            obortis metus eget, congue ante. Fusce id ante quis nulla venenatis
            condiment id nec diam
          </p>
        </CoruseDescription>
        <CoursePrice>
          <p>
            <PersonIcon
              sx={{
                color: '#898989',
              }}
              fontSize="large"
            />
            50
          </p>
          <p>20$</p>
        </CoursePrice>
        <CourseInstructor>CourseInstructor</CourseInstructor>
        <CourseButton></CourseButton>
      </CourseContend>
    </CourseContainer>
  );
};
