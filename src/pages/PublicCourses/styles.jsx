import styled from "styled-components";

export const CoursesContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrayBackground};
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  & > h1 {
    font-size: 1.8rem;
    margin: 4rem 0;
    text-transform: uppercase;
    color: #5373b2;
    text-align: center;
  }
`;

export const Courses = styled.div`
  width: 70%;
  margin: 0 auto;
  & > div {
    width: 100%;
    margin: 3rem 0;
    height: 350px;
    overflow: hidden;
  }
`;
