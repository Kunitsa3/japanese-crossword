import { FC, useState } from 'react';
import { ActionButtons } from './ActionButtons';
import { Table } from './Table';
import { FieldValue, Picture } from '@/store/pictures';
import { Field } from './Field';
import { SuccessModal } from './SuccessModal';
import _, { isEqual } from 'lodash';

interface CrosswordProps {
  currentPicture: Picture;
}

export const getEmptyField = (height: string, width: string) => new Array(+height).fill(new Array(+width).fill(0));

export const checkCrosswordOnValidity = (field: FieldValue[][], answer: FieldValue[][]) => {
  const fieldWithoutCrossElement = field.map(row => row.map(cellValue => (cellValue === 'X' ? 0 : cellValue)));

  return isEqual(fieldWithoutCrossElement, answer);
};

export const Crossword: FC<CrosswordProps> = ({ currentPicture }) => {
  const { topTable, leftTable, result, width, height } = currentPicture;
  const [currentField, setCurrentField] = useState<FieldValue[][]>(getEmptyField(height, width));
  const [isAnswerShown, setAnswerShown] = useState(false);
  const [isSuccessModalShown, setSuccessModalShown] = useState(false);

  const onResetButtonClick = () => {
    const newField = getEmptyField(height, width);
    setCurrentField(newField);
  };

  const onShowButtonClick = () => {
    setAnswerShown(!isAnswerShown);
  };

  const buttonsDetails = [
    { label: 'Reset', onClick: onResetButtonClick },
    { label: isAnswerShown ? 'Return to your image' : 'Show answer', onClick: onShowButtonClick },
  ];

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h2 className="mb-10 text-3xl font-bold text-cyan-700">Print nonogram</h2>
      <div className="flex flex-col items-end">
        <Table tableValues={topTable} />
        <div className="flex">
          <Table tableValues={leftTable} isLeftTable />
          <Field
            fieldValues={isAnswerShown ? result : currentField}
            setField={field => {
              setCurrentField(field);
              if (checkCrosswordOnValidity(field, result)) {
                setSuccessModalShown(true);
              }
            }}
          />
        </div>
      </div>
      <ActionButtons buttonsDetails={buttonsDetails} />
      {isSuccessModalShown && <SuccessModal toggleModal={() => setSuccessModalShown(false)} />}
    </div>
  );
};
