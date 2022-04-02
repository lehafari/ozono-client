import styled from 'styled-components';

export const HomeContainer = styled.section`
  margin-top: -2px;
  height: 70vh;
  width: 100vw;
`;

export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const HeroTextContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 100px 8% 0 8%;
  justify-content: center;
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
  width: 55%;
`;

export const HeroSeparator = styled.div`
  width: 40%;
  height: 2.5px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const HeroTitle = styled.div`
  & h1 {
    font-size: 6rem;
    font-family: 'PlantagenetCherokee';
    font-weight: unset;
    margin: 0;
    line-height: 1em;
  }
`;

export const HeroText = styled.div`
  & p {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.3em;
  }
`;

export const HeroForm = styled.div`
  display: flex;
  justify-content: space-around;
  & div {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.3em;
    background-color: #fff;
    padding: 13px 3rem;
    border-radius: 35px;
    background: ${(props) => props.theme.colors.navBlueHover};
  }

  & input {
    width: 40%;
    border: none;
    background: none;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.3em;
    padding: 13px 3rem;
    border-radius: 35px;
    background: ${(props) => props.theme.colors.white};
    &::placeholder {
      color: #b8b5b5;
    }
    &:focus {
      outline: none;
    }
    &::before {
      content: 'Buscar';
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.3em;
      padding: 10px 3rem;
      border-radius: 35px;
      background: ${(props) => props.theme.colors.headerBlue};
    }
  }
  & button {
    width: 10%;
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.3em;
    border-radius: 35px;
    background: ${(props) => props.theme.colors.headerBlue};
  }
`;

export const HeroImage = styled.div`
  width: 40%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
