import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
  );
};

export default Courses;
