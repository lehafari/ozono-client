import styled from 'styled-components';

export const CourseContainer = styled.div`
  border-radius: 35px;
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CourseImage = styled.div`
  width: 50%;
  height: 100%;
  & img {
    border-radius: 35px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CourseContend = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
`;

export const CourseTitle = styled.div`
  & h1 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.black};
    font-weight: 400;
    margin: 0;
  }
`;

export const CoruseDescription = styled.div`
  & p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.gray};
    font-weight: 300;
    margin: 0;
  }
`;

export const CoursePrice = styled.div`
  display: flex;
  align-items: center;

  & p {
    display: flex;
    align-items: center;
  }

  & p:first-child {
  }
`;

export const CourseInstructor = styled.div``;

export const CourseButton = styled.div``;
