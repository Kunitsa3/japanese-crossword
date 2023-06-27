import { useState } from 'react';
import { Field } from '../../components/Field';
import { Table } from '../../components/Table';
import { pictures } from '../../helpers';

export const MainPage = () => {
  const home = pictures.home;
  const [field, setField] = useState(pictures.home.field);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-end">
        <Table tableValues={home.topTable} />
        <div className="flex">
          <Table tableValues={home.leftTable} />
          <Field fieldValues={field} setField={setField} />
        </div>
      </div>
    </div>
  );
};
