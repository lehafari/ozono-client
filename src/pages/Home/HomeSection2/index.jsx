import { useSelector } from "react-redux";
import { CourseItem } from "../../../components/layout/CourseItem";
import { HomeCourseContainer, HomeCourseList, HomeCourseTitle } from "./styles";

export const HomeSection2 = () => {
  const { courses } = useSelector((state) => state.courses);

  const featuredCourses = courses.filter((course) => course.featured);
  console.log(featuredCourses);

  return (
    <HomeCourseContainer>
      <HomeCourseTitle>
        <h1>Cursos destacados</h1>
      </HomeCourseTitle>
      <HomeCourseList>
        <CourseItem {...featuredCourses[0]} />
      </HomeCourseList>
    </HomeCourseContainer>
  );
};
