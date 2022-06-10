import { endPoints } from 'const/endPoints';
import { fetchWithToken } from 'helpers/fetch';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ConfirmQuiz } from '../ConfirmQuiz';
import { SectionContainer } from '../Lessons/styles';
import { Typography } from '@mui/material';
import { Question } from './Question';
import { Box } from '@mui/system';
import { Timer } from './Timer';

export const Quiz = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [selectedOption, setSelectedOption] = useState({});
  const [loading, setLoading] = useState(true);

  const { lessonId } = useParams();

  const getQuizContent = async () => {
    const quizResponse = await fetchWithToken(
      `${endPoints.get_quiz_by_id}/${lessonId}`
    );
    const quizData = await quizResponse.json();
    const questionsResponse = await fetchWithToken(
      `${endPoints.get_all_questions_by_quiz}/${lessonId}`
    );
    const questionsData = await questionsResponse.json();

    setQuiz(quizData);
    setQuestions(questionsData);
  };

  useEffect(() => {
    getQuizContent();
  }, []);

  console.log(selectedOption);
  return (
    <SectionContainer>
      {!confirm ? (
        <ConfirmQuiz quiz={quiz} setConfirm={setConfirm} />
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Timer duration={quiz.duration} />
          <Box
            sx={{
              width: '50%',
              marginTop: '2rem',
            }}
          >
            {questions.map((question) => (
              <Question
                setSelectedOption={setSelectedOption}
                question={question}
              />
            ))}
          </Box>
        </Box>
      )}
    </SectionContainer>
  );
};
