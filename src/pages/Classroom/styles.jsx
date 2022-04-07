import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 40px 100px 40px 50px;
  display: flex;
  justify-content: space-evenly;
`;

export const ImgContainer = styled.div`
  width: 65%;
`;

export const Image = styled.div`
  width: 100%;
  & > img {
    width: 100%;
  }
`;

export const VideoTitle = styled.div`
  padding: 10px 0 0 0px;
`;

export const VideoList = styled.div`
  width: 35%;
  height: 422px;
  background-color: coral;
  margin: 0px 0px 0px 40px;
  border-radius: 25px;
`;

export const HeaderList = styled.div`
  background: rgb(81, 153, 187);
  background: linear-gradient(
    90deg,
    rgba(81, 153, 187, 1) 22%,
    rgba(83, 103, 180, 1) 100%
  );
  border-radius: 25px 25px 0px 0px;
`;

export const Title = styled.div`
  padding: 20px 0 20px 20px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #ffffff;
  & h5 {
    margin: 0px 0px 0px 0px;
    padding: 5px 0px 5px 0px;
  }
`;

export const List = styled.div``;

export const ItemList = styled.div``;

export const ImgItem = styled.div``;

export const TextItem = styled.div``;
