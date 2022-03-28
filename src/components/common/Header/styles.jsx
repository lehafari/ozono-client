import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.headerBlue};
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 2rem;
  box-sizing: border-box;
`;
export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 13.5px;
  height: 50%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const Container1 = styled(Container)`
  width: 20%;
  & > img {
    width: 12rem;
    height: auto;
  }
`;

export const Container2 = styled(Container)`
  border-left: 2px solid ${(props) => props.theme.colors.white};
`;
export const Container3 = styled(Container)`
  border-left: 2px solid ${(props) => props.theme.colors.white};
`;
export const Container4 = styled(Container)`
  width: 20%;
  & > img {
    width: 7rem;
    height: auto;
  }
`;
