import { MyCourseItem } from '../../../components/layout/MyCourseItem';
import { MyCoursesContainer, ProfileCourseList } from './styles';

export const MyCourses = () => {
  return (
    <>
      <h1>Cursos adquiridos</h1>
      <ProfileCourseList>
        <MyCourseItem />
        <MyCourseItem />
        <MyCourseItem />
        <MyCourseItem />
      </ProfileCourseList>
    </>
  );
};
