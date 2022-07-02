import React from 'react';
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
import ReactPlayer from 'react-player';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClassRoomItems from 'components/layout/ClassroomItems';
import { Button } from 'components/common/Buttons/MainButton';
import { Box } from '@mui/material';
import { fetchWithToken } from 'helpers/fetch';
import { endPoints } from 'const/endPoints';
import Toast from 'components/common/Popup/Toast';

export const VideoLesson = ({
  lesson,
  lessonsAndQuizzes,
  date,
  cleanTitle,
  courseTitle,
  videoUrl,
  lessonId,
  section,
  nextSection,
  type,
  course,
}) => {
  const handleCertificate = async () => {
    const resp = await fetchWithToken(
      `${endPoints.get_certificate}/${course.id}`
    );
    const body = await resp.json();
    console.log(body);
    if (resp.status === 200) {
      Toast('success', body.message);
    } else {
      Toast('error', body.message);
    }
  };
  // const firstNextLesson = nextSection[0];
  // const newType = type === 'clase' ? 'clase' : 'quiz';

  // const nextPath =
  //   firstNextLesson &&
  //   `/course/classroom/${cleanTitle}/${newType}/${firstNextLesson.id}`;
  return (
    <Box
      sx={{
        height: 'calc(100vh - 84px)',
        backgroundColor: ' #f8f8f8',
      }}
    >
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
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
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
          <VideoTitle>
            <h1>{lesson.name}</h1>
            <h2>{date}</h2>
          </VideoTitle>
        </ImgContainer>
        <VideoList>
          <HeaderList>
            <Title>
              <h1>{section.name}</h1>
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
              const lessonType = item.status ? 'quiz' : 'clase';
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
        <Button text="Obtener Certificado" click={handleCertificate} />
        {/* <ButtonSection>
          <h2>Quiz 1</h2>
          <Button
            text={<ArrowForwardIcon fontSize="medium" />}
            padding="9px 11px"
            borderRadius="50%"
            shadow="0px 13px 56px  rgba(82, 124, 182, 0.71)"
            path={nextPath}
          />
        </ButtonSection> */}
      </Container2>
    </Box>
  );
};
