import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  & label {
    font-size: 1rem;
    color: #b8b8b8;
    font-weight: lighter;
  }
  & > span {
    color: #ff0000;
    font-size: 0.8rem;
    padding: 3px 0 0 12px;
  }
`;

export const InputItem = styled.input`
  padding: ${(props) => props.padding || "0px 25px"};
  border: none;
  border-radius: 20px;
  width: ${(props) => props.width || "60%"};
  height: ${(props) => props.heigth || "50px"};
  margin: ${(props) => props.margin || "40px 0px 5px 0px"};
  background-color: #f2f2f2;

  &:focus {
    outline: none;
  }
`;
