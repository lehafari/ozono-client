import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { fetchWithToken } from 'helpers/fetch';
import { endPoints } from 'const/endPoints';

export const Question = ({ question }) => {
  const [options, setOptions] = useState([]);

  const getOptions = async () => {
    const response = await fetchWithToken(
      `${endPoints.get_all_options_by_question}/${question.id}`
    );
    const data = await response.json();
    setOptions(data);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        padding: '2rem 5rem',
        borderRadius: '35px',
        margin: '2rem 0',
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          color: '#7f7f7f',
        }}
      >
        {question.question}
      </Typography>
      <ul>
        {options.length > 0 &&
          options.map((option) => <li>{option.option}</li>)}
      </ul>
    </Box>
  );
};
