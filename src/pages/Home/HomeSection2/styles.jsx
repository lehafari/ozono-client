import styled from 'styled-components';

export const HomeCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
`;

export const HomeCourseTitle = styled.div`
  & h1 {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.titleBlue};
  }
`;

export const HomeCourseList = styled.div``;

export const HomeCourseItem = styled.div``;
