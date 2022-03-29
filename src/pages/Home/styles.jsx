import styled from 'styled-components';

export const HomeContainer = styled.section`
  height: 65vh;
  width: 100vw;
`;

export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const HeroText = styled.div`
  background: rgb(88, 102, 173);
  background: -moz-linear-gradient(
    90deg,
    rgba(88, 102, 173, 1) 0%,
    rgba(83, 137, 184, 1) 55%,
    rgba(55, 176, 207, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(88, 102, 173, 1) 0%,
    rgba(83, 137, 184, 1) 55%,
    rgba(55, 176, 207, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(88, 102, 173, 1) 0%,
    rgba(83, 137, 184, 1) 55%,
    rgba(55, 176, 207, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5866ad",endColorstr="#37b0cf",GradientType=1);
  width: 60%;
`;

export const HeroImage = styled.div`
  width: 40%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
