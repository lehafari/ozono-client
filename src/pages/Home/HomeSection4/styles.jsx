import styled from 'styled-components';

export const NewsTitle = styled.div`
  & h1 {
    font-size: 1.8rem;
    margin-bottom: 5rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.titleBlue};
    text-align: center;
  }
`;

export const NewsNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  & button {
    margin: 0 1rem;
  }
`;
