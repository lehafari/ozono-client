import React from "react";
import { ImgItem, ItemList, TextItem } from "./style";
import mini from "../../../assets/images//classroom-mini.svg";

const ClassRoomItems = () => {
  return (
    <ItemList>
      <ImgItem>
        <img src={mini} alt="miniatura video" />
      </ImgItem>
      <TextItem>
        <h5>Ozonoterapeuta Clinico</h5>
        <p>Video 2</p>
      </TextItem>
    </ItemList>
  );
};

export default ClassRoomItems;
