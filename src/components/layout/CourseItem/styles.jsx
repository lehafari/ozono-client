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
  height: auto;
  & img {
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-right: -1rem;
  }
`;

export const CourseContend = styled.div`
  border-radius: 35px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem 2.5rem 1rem 2.5rem;
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
  font-size: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightBlue};

  & p {
    display: flex;
    align-items: center;
    margin: 1rem 0 0.5rem 0;
  }

  & p:first-child {
    color: ${(props) => props.theme.colors.gray};
  }

  & p:last-child {
    color: ${(props) => props.theme.colors.lightBlue};
    margin-left: 2rem;
    font-weight: 700;
    font-size: 1.3rem;
  }
`;

export const CourseInstructor = styled.div`
  & h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: 400;
    margin: 1rem 0 0 0;
  }

  & p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.darkGray};
    margin: 0;
  }
`;

export const CourseButton = styled.button`
  background-color: ${(props) => props.theme.colors.headerBlue};
  border: none;
  border-radius: 35px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: 400;
  width: 50%;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;
