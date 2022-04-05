import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #f8f8f8; */
  margin: 10px 0px;
`;

export const Content = styled.div`
  padding: 50px 100px 50px 100px;
  margin-inline: 92px;
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  width: 30%;
  margin-right: 50px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;

  & > h4 {
    margin-right: 10px;
  }
  & > p {
    margin: 0%;
  }
`;

export const VerticalLine = styled.div`
  background-color: lightblue;
  width: 1px;
  height: 300px;
  margin-right: 50px;
`;

export const LogosContainer = styled.div`
  width: 70%;
  & > h3 {
    padding-inline: auto;
  }
`;

export const Logos = styled.div``;
