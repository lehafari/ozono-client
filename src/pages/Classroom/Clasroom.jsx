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

const Classroom = () => {
  return (
    <>
      <BackgroundNavbar />
      <MenuBar />
      <SectionContainer>
        <ImgContainer>
          <Image>
            <img src="" alt="" />
          </Image>
          <VideoTitle>
            <h2>OLA SOY UN TITULO</h2>
          </VideoTitle>
        </ImgContainer>
        <VideoList>
          <HeaderList>
            <Title>Titulo del curso</Title>
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
              <ImgItem>Miniatura</ImgItem>
              <TextItem>Titulo de la miniatura</TextItem>
            </ItemList>
          </List>
        </VideoList>
      </SectionContainer>
    </>
  );
};

export default Classroom;
