import { useState, useEffect } from 'react';

import { fetchWithToken } from 'helpers/fetch';
import { endPoints } from 'const/endPoints';

export const Question = ({ question }) => {
  const [options, setOptions] = useState([]);

  const getOptions = async () => {
    const response = await fetchWithToken(
      `${endPoints.get_all_options_by_question}/${question.id}`
    );
    const data = await response.json();
    setOptions(data);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <>
      <h1>{question.question}</h1>
      <ul>
        {options.length > 0 &&
          options.map((option) => <li>{option.option}</li>)}
      </ul>
    </>
  );
};
