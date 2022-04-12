import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 85px 0px 0px 0px;
  display: flex;
  background-color: ${(props) => props.theme.colors.lightGrayBackground};
`;

export const AccesContainer = styled.div`
  width: 41%;
  padding: 15px 50px 0px 50px;
`;

export const BannerContainer = styled.div`
  width: 59%;
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

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 80%;
  height: 45%;
  background-color: white;
  border-radius: 15px;
  padding: 10px 50px;

  & h5 {
    margin: 50px 0 0 0;
    padding: 20px;
    font-size: 2.5rem;
  }
  & h6 {
    margin: 60px 0 0 0;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`;
