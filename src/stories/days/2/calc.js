const mapInputRow = (input) => {
  const split = input.split(' ');
  
  if (split.length < 3) {
    return null;
  }

  const first = parseInt(split[0].split('-')[0]);
  const second = parseInt(split[0].split('-')[1]);
  const id  = split[1].replace(':', '');
  const val = split[2];

  return {
    first,
    second,
    id,
    val,
  };
}

export const calcOccurence = (input) => {  
  const inputArr = input.split('\n');
  let valid = 0;
     
  inputArr.forEach(input => {
    const _inp = mapInputRow(input);
    
    if (!_inp) {
      return;
    }
    
    const {
      first,
      second,
      id,
      val,
    } = _inp;

    const occurence = val.split(id).length - 1;

    if (occurence >= first && occurence <= second) {
      valid++;
    }
  });

  return valid;
}

export const calcPositions = (input) => {  
  const inputArr = input.split('\n');
  let valid = 0;
     
  inputArr.forEach(input => {
    const _inp = mapInputRow(input);
    
    if (!_inp) {
      return;
    }
    
    const {
      first,
      second,
      id,
      val,
    } = _inp;

    if ((val[first - 1] === id || val[second - 1] === id) && !(val[first - 1] === id && val[second - 1] === id)) {
      valid++;
    }

  });

  return valid;
}
