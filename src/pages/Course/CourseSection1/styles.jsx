import styled from "styled-components";

export const SectionContainer = styled.section`
  padding-top: 85px;
  width: 100%;
  height: 400px;
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
  width: 100%;
`;
export const TextContainer = styled.div`
  padding-left: 180px;
  @media only screen and (${(props) => props.theme.breakpoints.mobile}) {
    padding: 0px 10px 0px 10px;
  }
`;

export const Student = styled.div`
  margin-bottom: 20px;
  & h6 {
    color: white;
    margin: 30px 0px 10px 0px;
    font-family: Helvetica, sans-serif;
    font-size: 0.9rem;
    font-weight: 100;
  }
`;

export const LineUp = styled.div`
  width: 20%;
  height: 1.5px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const CourseName = styled.div`
  color: white;
  & h1 {
    font-family: "PlantagenetCherokee";
    font-size: 5rem;
    margin: 0;
    line-height: 1em;
  }
  @media only screen and (${(props) => props.theme.breakpoints.xs}) {
    & h1 {
      font-family: "PlantagenetCherokee";
      font-size: 3.7rem;
      margin: 0;
      line-height: 1em;
    }
  }
  @media screen and (${(props) => props.theme.breakpoints.s}) {
    & h1 {
      font-size: 2.8rem;
    }
  }
`;

export const CourseDetails = styled.div`
  & p {
    font-size: 1.5rem;
    font-weight: lighter;
  }
`;
