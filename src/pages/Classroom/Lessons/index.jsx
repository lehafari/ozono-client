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

export const VideoLesson = ({
  lesson,
  lessonsAndQuizzes,
  date,
  cleanTitle,
  courseTitle,
  videoUrl,
  lessonId,
}) => {
  return (
    <>
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
        <VideoTitle>
          <h1>{lesson.name}</h1>
          <h2>{date}</h2>
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
    </>
  );
};
