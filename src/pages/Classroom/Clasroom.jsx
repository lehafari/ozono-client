import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import { BackgroundNavbar } from '../../components/common/BackgroundNavbar';
import { MenuBar } from '../../components/common/MenuBar';
import {
  ButtonSection,
  Container2,
  HeaderList,
  ImgContainer,
  List,
  SectionContainer,
  Text,
  Title,
  VideoList,
  VideoTitle,
} from './styles';

import imgvideo from '../../assets/images/classroom-main.svg';
import ClassRoomItems from '../../components/layout/ClassroomItems';
import { Button } from '../../components/common/Buttons/MainButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { videoUrl } from 'const/videoUrl';
import { useParams } from 'react-router-dom';
import { toCapitalize } from 'helpers/toCapitalize';
import { fetchWithToken } from 'helpers/fetch';
import { endPoints } from 'const/endPoints';
import Spinner from 'components/common/Spinner';
import { Box } from '@mui/system';
import { sortByCreateDate } from 'helpers/sort';
import { useSelector } from 'react-redux';

const Classroom = () => {
  const [lessonsAndQuizzes, setLessonsAndQuizzes] = useState([]);
  const [lesson, setLesson] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { courseTitle, lessonId, type } = useParams();
  const cleanTitle = toCapitalize(courseTitle.replace(/-/g, ' '));

  const { courses } = useSelector((state) => state.courses);
  const course = courses.find(
    (course) => course.title.toLowerCase() === cleanTitle.toLowerCase()
  );
  useEffect(() => {
    getLessonsAndQuizzes(course.id);
    getLesson();
  }, []);

  const getLessonsAndQuizzes = async (courseId) => {
    const section = await fetchWithToken(
      `${endPoints.get_section_by_lesson}/${lessonId}`
    );
    const bodySection = await section.json();

    const lessons = await fetchWithToken(
      `${endPoints.get_all_lessons_by_section}/${bodySection.id}`
    );
    const bodyLessons = await lessons.json();
    const quizzes = await fetchWithToken(
      `${endPoints.get_all_quiz_by_section}/${bodySection.id}`
    );
    const bodyQuizzes = await quizzes.json();
    if (lessons.status === 200 && quizzes.status === 200) {
      setLessonsAndQuizzes(sortByCreateDate(bodyLessons, bodyQuizzes));
      setLoading(false);
    } else {
      setLessonsAndQuizzes([]);
      setLoading(false);
    }
  };

  const getLesson = async () => {
    const response = await fetchWithToken(
      `${endPoints.get_lesson_by_id}/${lessonId}`
    );
    const body = await response.json();
    if (response.status === 200) {
      setLesson(body);
      setLoading(false);
    }
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',
        height: 'calc(100vh - 84px)',
      }}
    >
      <BackgroundNavbar />
      <MenuBar />
      <SectionContainer>
        <ImgContainer>
          <ReactPlayer
            url={`${videoUrl}${lessonId}`}
            width="100%"
            height="100%"
            controls
            playing
            style={{
              // make minimalistic player
              objectFit: 'fill',
              objectPosition: 'cenfter',
              backgroundColor: '#0f0f0f',
              borderRadius: '10px',
              border: 'none',
            }}
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                },
                quality: 'hd720',
              },
            }}
          />
        </ImgContainer>
        <VideoList>
          <HeaderList>
            <Title>
              <h1>{cleanTitle}</h1>
            </Title>
            <Text>
              <div>
                <h5>Video</h5>
              </div>
              <div>
                <h5>Recursos</h5>
              </div>
            </Text>
          </HeaderList>
          <List>
            {lessonsAndQuizzes.map((item, index) => {
              const lessonType = item.status ? 'quiz' : 'lesson';
              return (
                <ClassRoomItems
                  key={index}
                  type={lessonType}
                  courseTitle={cleanTitle}
                  lessonId={lessonId}
                  item={item}
                />
              );
            })}
          </List>
        </VideoList>
      </SectionContainer>
      <Container2>
        <VideoTitle>
          <h1>{lesson.name}</h1>
          <h2>13 feb 2022</h2>
        </VideoTitle>
        <ButtonSection>
          <h2>Quiz 1</h2>
          <Button
            text={<ArrowForwardIcon fontSize="medium" />}
            padding="9px 11px"
            borderRadius="50%"
            shadow="0px 13px 56px  rgba(82, 124, 182, 0.71)"
          />
        </ButtonSection>
      </Container2>
    </Box>
  );
};

export default Classroom;
