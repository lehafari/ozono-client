import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { fetchWithToken } from 'helpers/fetch';
import { endPoints } from 'const/endPoints';

export const Question = ({ question, setSelectedOption }) => {
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
        padding: '2rem 0',
        borderRadius: '35px',
        width: '100%',
        margin: '2rem 0',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          color: '#7f7f7f',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        {question.question}
      </Typography>
      <form>
        <Box>
          {options.length > 0 &&
            options.map((option) => (
              <Box
                sx={{
                  padding: '1rem 5rem',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
                onClick={() => setSelectedOption(option)}
              >
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: '#7f7f7f',
                  }}
                >
                  {option.option}
                </Typography>
              </Box>
            ))}
        </Box>
      </form>
    </Box>
  );
};
