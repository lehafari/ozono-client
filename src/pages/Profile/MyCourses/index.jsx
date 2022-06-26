import { endPoints } from 'const/endPoints';
import { fetchWithToken } from 'helpers/fetch';
import { useEffect, useState } from 'react';
import { MyCourseItem } from '../../../components/layout/MyCourseItem';
import { MyCoursesContainer, ProfileCourseList } from './styles';

export const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);

  const getMyCourses = async () => {
    const response = await fetchWithToken(endPoints.get_courses_me);
    const courses = await response.json();
    setCourses(courses);
  };

  useEffect(() => {
    getMyCourses();
  }, []);

  if (courses.length === 0) {
    return <h1>No tienes cursos adquiridos aún</h1>;
  }
  return (
    <>
      <h1>Cursos adquiridos</h1>
      <ProfileCourseList>
        {courses.map((course) => (
          <MyCourseItem key={course.id} course={course} />
        ))}
      </ProfileCourseList>
    </>
  );
};
