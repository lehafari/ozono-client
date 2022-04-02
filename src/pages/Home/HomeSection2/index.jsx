import { CourseItem } from '../../../components/layout/CourseItem';
import { HomeCourseContainer, HomeCourseList, HomeCourseTitle } from './styles';

export const HomeSection2 = () => {
  return (
    <HomeCourseContainer>
      <HomeCourseTitle>
        <h1>Curso</h1>
      </HomeCourseTitle>
      <HomeCourseList>
        <CourseItem />
      </HomeCourseList>
    </HomeCourseContainer>
  );
};
