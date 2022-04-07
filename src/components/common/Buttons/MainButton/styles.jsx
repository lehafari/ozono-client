import styled from 'styled-components';

export const MainButton = styled.button`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.headerBlue};
  border: none;
  border-radius: 35px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: 400;
  width: ${(props) => props.width || ''};
  padding: ${(props) => props.padding || '0.5rem 1rem'};
  margin: ${(props) => props.margin || ' 1rem 0'};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  align-self: ${(props) => props.alignSelf || 'flex-start'};
  &:hover {
    background-color: ${(props) => props.theme.colors.navBlueHover};
  }
`;
