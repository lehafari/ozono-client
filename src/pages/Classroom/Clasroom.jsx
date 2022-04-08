import React from "react";
import { BackgroundNavbar } from "../../components/common/BackgroundNavbar";
import { MenuBar } from "../../components/common/MenuBar";
import {
  ButtonSection,
  HeaderList,
  Image,
  ImgContainer,
  List,
  SectionContainer,
  Text,
  Title,
  VideoList,
  VideoTitle,
} from "./styles";

import imgvideo from "../../assets/images/classroom-main.svg";
import ClassRoomItems from "../../components/layout/ClassroomItems";
import { Button } from "../../components/common/Buttons/MainButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Classroom = () => {
  return (
    <>
      <BackgroundNavbar />
      <MenuBar />
      <SectionContainer>
        <ImgContainer>
          <Image>
            <img src={imgvideo} alt="Video play" />
          </Image>
          <VideoTitle>
            <h1>Ozonoterapeuta Clinico video 1</h1>
            <h2>13 feb 2022</h2>
          </VideoTitle>
        </ImgContainer>
        <VideoList>
          <HeaderList>
            <Title>
              <h1>Ozonoterapeuta Clinico</h1>
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
            <ClassRoomItems />
            <ClassRoomItems />
            <ClassRoomItems />
            <ClassRoomItems />
          </List>
          <ButtonSection>
            <h2>Quiz</h2>
            <Button text={<ArrowForwardIcon />} />
          </ButtonSection>
        </VideoList>
      </SectionContainer>
    </>
  );
};

export default Classroom;
