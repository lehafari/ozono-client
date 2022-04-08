import React from "react";
import { BackgroundNavbar } from "../../components/common/BackgroundNavbar";
import { MenuBar } from "../../components/common/MenuBar";
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
          <img src={imgvideo} alt="Video play" />
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
        </VideoList>
      </SectionContainer>
      <Container2>
        <VideoTitle>
          <h1>Ozonoterapeuta Clinico video 1</h1>
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
    </>
  );
};

export default Classroom;
