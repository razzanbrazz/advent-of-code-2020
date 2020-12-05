import React, { useState } from 'react';

import Input from '../../../components/Input';
import { calcExistingProps, calcValidatedProps } from './calc';

const Story = {
  title: 'Day 4',
};

export const PartOne = () => {
  const [inputData, setInputData] = useState('');
  
  const onInputChange = (event) => {
    setInputData(event.target.value);
  }

  const output = inputData
    ? calcExistingProps(inputData)
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
    ? calcValidatedProps(inputData)
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