import React, { useEffect, useMemo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Button } from 'components/common/Buttons/MainButton';
import { Box } from '@mui/system';

import { endPoints } from 'const/endPoints';
import { fetchWithToken } from 'helpers/fetch';
import Spinner from 'components/common/Spinner';

export const SectionAccordion = ({ section }) => {
  const [lessons, setLessons] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLessons = async (sectionId) => {
    console.log('entre');
    const response = await fetchWithToken(
      `${endPoints.get_all_lessons_by_section}/${sectionId}`
    );
    const body = await response.json();
    if (response.status === 200) {
      setLessons(body);
    } else {
      setLessons([]);
    }
  };

  const getQuizzes = async (sectionId) => {
    const response = await fetchWithToken(
      `${endPoints.get_all_quiz_by_section}/${sectionId}`
    );
    const body = await response.json();
    if (response.status === 200) {
      setQuizzes(body);
    } else {
      setQuizzes([]);
    }
  };

  useEffect(() => {
    getLessons(section.id);
    getQuizzes(section.id);
    setLoading(false);
  }, []);

  if (loading) {
    return (
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
    );
  }

  return (
    <Accordion
      key={section.id}
      sx={{
        border: 'none',
        boxShadow: 'none',
        margin: '1.2rem 0 1.5rem 0',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          variant="h4"
          sx={{
            color: '#5e82be',
            fontSize: '2.2rem',
          }}
        >
          {section.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List
          sx={{
            padding: '0',
          }}
        >
          {lessons.length > 0 ? (
            lessons.map((section, j) => {
              const color = j % 2 === 0 ? '#F0F0F0' : '#fff';
              return (
                <ListItem
                  key={j}
                  secondaryAction={
                    <Box
                      sx={{
                        paddingRight: '2rem',
                      }}
                    >
                      <Button text={'Entrar a la clase'} fontSize={'1rem'} />
                    </Box>
                  }
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                    backgroundColor: color,
                    padding: '2rem 3rem',
                    display: 'flex',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.8rem',
                      color: '#5e82be',
                    }}
                  >
                    {`Clase ${j + 1}`}
                    <br />
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: '#808080',
                        width: '80%',
                        fontFamily: 'Helvetica',
                        fontWeight: '200',
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the ndustry’s
                      standard dummy text ever since the 1500s
                    </Typography>
                  </Typography>
                </ListItem>
              );
            })
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100px',
              }}
            >
              <Typography
                sx={{
                  color: '#808080',
                  fontFamily: 'Helvetica',
                  fontWeight: '200',
                }}
              >
                No hay clases
              </Typography>
            </Box>
          )}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
