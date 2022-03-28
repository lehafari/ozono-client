import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.headerBlue};
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Container1 = styled.div`
  & > img {
    width: 10rem;
    height: auto;
  }
`;
export const Container2 = styled.div`
  border-left: 1px solid ${(props) => props.theme.colors.white};
`;
export const Container3 = styled.div``;
export const Container4 = styled.div``;
