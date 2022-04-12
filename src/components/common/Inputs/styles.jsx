import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  margin: 10px 0;
  padding: 0px 0px 0px 0px;
  & label {
    font-size: 1rem;
    color: #b8b8b8;
    font-weight: lighter;
  }
`;

export const InputItem = styled.input`
  padding: ${(props) => props.padding || "0px 25px"};
  border: none;
  border-radius: 20px;
  width: ${(props) => props.width || "70%"};
  height: ${(props) => props.heigth || "50px"};
  margin: ${(props) => props.margin || "5px 0px 40px 0px"};
  background-color: #f2f2f2;

  &:focus {
    outline: none;
  }
`;
