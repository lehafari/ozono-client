import React from 'react';
import parse from 'html-react-parser';

export const Description = ({ description }) => {
  return (
    <div>
      <h1>{parse(description)}</h1>
    </div>
  );
};
