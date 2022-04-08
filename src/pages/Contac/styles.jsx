import styled from 'styled-components';

export const ContactContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrayBackground};
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactSwitch = styled.div`
  display: flex;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
`;

export const ContactSwitchTextLeft = styled.div`
  font-size: 1.5rem;
  color: ${(props) => (props.status ? '#C6C6C6' : '#6385B8')};
`;

export const ContactSwitchTextRight = styled.div`
  font-size: 1.5rem;
  color: ${(props) => (props.status ? '#6385B8' : '#C6C6C6')};
`;
