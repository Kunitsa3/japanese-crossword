import { useState } from 'react';
import { pictures } from '../../helpers';
import { ActionButtons } from '../ActionButtons';
import { Table } from './Table';
import { Field } from './Field';

export const Crossword = () => {
  const home = pictures.home;
  const [field, setField] = useState(pictures.home.field);
  const [isAnswerShows, setAnswerShows] = useState(false);

  const onResetButtonClick = () => {
    const newField = field.map(el => new Array(el.length).fill(0));
    setField(newField);
  };

  const onShowButtonClick = () => {
    setAnswerShows(!isAnswerShows);
  };

  const buttonsDetails = [
    { label: 'Reset', onClick: onResetButtonClick },
    { label: isAnswerShows ? 'Return to your image' : 'Show answer', onClick: onShowButtonClick },
  ];
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ActionButtons buttonsDetails={buttonsDetails} />
      <div className="flex flex-col items-end">
        <Table tableValues={home.topTable} />
        <div className="flex">
          <Table tableValues={home.leftTable} />
          <Field fieldValues={isAnswerShows ? home.result : field} setField={setField} />
        </div>
      </div>
    </div>
  );
};
