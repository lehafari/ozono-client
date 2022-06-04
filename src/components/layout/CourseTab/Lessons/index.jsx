import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';

import { endPoints } from 'const/endPoints';
import { fetchWithToken } from 'helpers/fetch';
import { SectionAccordion } from './Accordion';
import Spinner from 'components/common/Spinner';

export const Lessons = ({ courseId }) => {
  //***** Get lesson and quizzes *****//
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSections = async (courseId) => {
    const response = await fetchWithToken(
      `${endPoints.get_all_sections_by_course}/${courseId}`
    );
    const body = await response.json();
    if (response.status === 200) {
      setSections(body);
      setLoading(false);
    } else {
      setSections([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSections(courseId);
  }, []);

  // const getQuizzes = async (courseId) => {
  //   const response = await fetchWithToken(
  //     `${endPoints.get_all_quiz_by_section}/${courseId}`
  //   );
  //   const body = await response.json();
  //   if (response.status === 200) {
  //     setQuizzes(body);
  //     setLoading(false);
  //   } else {
  //     setQuizzes([]);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            width: '100%',
          }}
        >
          <Spinner />
        </Box>
      ) : (
        sections.map((section, i) => (
          <SectionAccordion key={i} section={section} />
        ))
      )}
    </>
  );
};
