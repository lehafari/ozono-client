import React from 'react';
import { MainButton } from './styles';

export const Button = (props) => {
  return <MainButton width={props.width}>{props.text}</MainButton>;
};
