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
  padding: 20px 0 0 0px;

  & > h1 {
    margin: 0px;
    color: #555555;
    font-size: 1.9rem;
    font-weight: lighter;
  }
  & > h2 {
    margin: 0px;
    color: #55555540;
    font-size: 1.4rem;
    font-weight: lighter;
  }
`;

export const VideoList = styled.div`
  width: 30%;
  height: 422px;
  margin: 0px 0px 0px 40px;
  border-radius: 15px;
`;

export const HeaderList = styled.div`
  background: rgb(81, 153, 187);
  background: linear-gradient(
    90deg,
    rgba(81, 153, 187, 1) 22%,
    rgba(83, 103, 180, 1) 100%
  );
  border-radius: 15px 15px 0px 0px;
`;

export const Title = styled.div`
  padding: 25px 0 25px 25px;
  & > h1 {
    margin: 0;
    color: #ffff;
    font-size: 1.2rem;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #ffffff;
  & h5 {
    margin: 0px 0px 0px 0px;
    padding: 5px 0px 5px 0px;
  }
  & > div {
    width: 50%;
    text-align: center;
    transition: all 0.3s ease-in-out;
    color: #ffffff5e;
    cursor: pointer;
  }

  & > div:hover {
    background-color: #ffffff3e;
    color: #fdfdfd;
  }
`;

export const List = styled.div`
  height: 324px;
  overflow-y: scroll;
  border-radius: 25px;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0px 0px 0px;
  & > h2 {
    margin: 0px 10px 0px 0px;
  }
`;
