import React, { useState } from 'react';

import Input from '../../../components/Input';
import { calcOccurence, calcPositions } from './calc';

const Story = {
  title: 'Day 2',
};

export const PartOne = () => {
  const [inputData, setInputData] = useState('');
  
  const onInputChange = (event) => {
    setInputData(event.target.value);
  }

  const output = inputData
    ? calcOccurence(inputData)
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
    ? calcPositions(inputData)
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

export default Story;