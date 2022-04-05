import styled from 'styled-components';

export const SpaceContainer = styled.div`
  height: 87px;
  margin-top: -2px;
  background: ${(props) => props.theme.gradient.blueGradientMain};
  background: -moz-linear-gradient(
    90deg,
    ${(props) => props.theme.gradient.blueGradient[0]},
    ${(props) => props.theme.gradient.blueGradient[1]},
    ${(props) => props.theme.gradient.blueGradient[2]}
  );
  background: -webkit-linear-gradient(
    90deg,
    ${(props) => props.theme.gradient.blueGradient[0]},
    ${(props) => props.theme.gradient.blueGradient[1]},
    ${(props) => props.theme.gradient.blueGradient[2]}
  );
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.gradient.blueGradient[0]},
    ${(props) => props.theme.gradient.blueGradient[1]},
    ${(props) => props.theme.gradient.blueGradient[2]}
  );
`;

export const MenuBar = styled.div`
  height: 85px;
  padding-right: 3rem;
  display: flex;
  margin-top: -2px;
  align-items: center;
  justify-content: flex-end;
  background: ${(props) => props.theme.gradient.blueGradientMain};
  background: -moz-linear-gradient(
    90deg,
    ${(props) => props.theme.gradient.blueGradient[0]},
    ${(props) => props.theme.gradient.blueGradient[1]},
    ${(props) => props.theme.gradient.blueGradient[2]}
  );
  background: -webkit-linear-gradient(
    90deg,
    ${(props) => props.theme.gradient.blueGradient[0]},
    ${(props) => props.theme.gradient.blueGradient[1]},
    ${(props) => props.theme.gradient.blueGradient[2]}
  );
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.gradient.blueGradient[0]},
    ${(props) => props.theme.gradient.blueGradient[1]},
    ${(props) => props.theme.gradient.blueGradient[2]}
  );
`;

export const ProfileContainer = styled.div``;

export const ProfileInfo = styled.div`
  display: flex;

  height: 100px;
  align-items: center;
  padding: 0 7rem;
  & > img {
    width: 170px;

    z-index: 9;
  }
`;

export const ProfileInfoText = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > h2 {
    family-font: 'helvetica';
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
  }

  & > p {
    margin: 0;
    family-font: 'helvetica';
    font-size: 0.9rem;
    font-weight: 200;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const ProfileDashboard = styled.div`
  background: ${(props) => props.theme.colors.lightGrayBackground};
  height: 600px;
  padding: 0 7rem;
`;

export const ProfileCourseList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem;
  flex-wrap: wrap;
  margin: 0 -10%;
  align-items: center;
  height: fit-content;
`;

export const MyCourses = styled.div`
  width: 100%;
  padding-top: 3rem;
  & > h1 {
    font-size: 2.2rem;
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: 500;
  }
`;
