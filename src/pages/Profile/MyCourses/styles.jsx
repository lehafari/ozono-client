import styled from 'styled-components';

export const ProfileCourseList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem;
  flex-wrap: wrap;
  margin: 0 -10%;
  align-items: center;
  height: fit-content;

  @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
    margin: 0;
    padding: 0;
  }

  @media only screen and (${(props) => props.theme.breakpoints.mobile}) {
    padding: 0;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;
