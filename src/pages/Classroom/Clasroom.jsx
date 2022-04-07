import React from "react";
import { BackgroundNavbar } from "../../components/common/BackgroundNavbar";
import { MenuBar } from "../../components/common/MenuBar";
import {
  HeaderList,
  Image,
  ImgContainer,
  ImgItem,
  ItemList,
  List,
  SectionContainer,
  Text,
  TextItem,
  Title,
  VideoList,
  VideoTitle,
} from "./styles";

import imgvideo from "../../assets/images/classroom-main.svg";

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
            <h2>OLA SOY UN TITULO</h2>
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
            <ItemList>
              <ImgItem>
                <img src="" alt="" />
              </ImgItem>
              <TextItem>Titulo de la miniatura</TextItem>
            </ItemList>
          </List>
        </VideoList>
      </SectionContainer>
    </>
  );
};

export default Classroom;
