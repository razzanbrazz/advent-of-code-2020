import React, { useState } from 'react';

import Input from '../../../components/Input';
import calc from './calc';

const Story = {
  title: 'Day 1',
};

export const PartOne = () => {
  const [inputData, setInputData] = useState('');
  
  const onInputChange = (event) => {
    setInputData(event.target.value);
  }

  const output = inputData
    ? calc(inputData, 2)
    : null;

  return (
    <>
      <Input value={inputData} onChange={onInputChange} />
      <div className="output">
        {output}
      </div>
    </>
  );
};

export const PartTwo = () => {
  const [inputData, setInputData] = useState('');
  
  const onInputChange = (event) => {
    setInputData(event.target.value);
  }

  const output = inputData 
    ? calc(inputData, 3)
    : null;

  return (
    <>
      <Input value={inputData} onChange={onInputChange} />
      <div className="output">
        {output}
      </div>
    </>
  );
}

export default Story;