const calc = (input, matchingRows) => {  
  const inputArr = input.split('\n');
  let val = 'no match';

  inputArr.forEach(a => {
    const _a = parseFloat(a);
    inputArr.forEach(b => {
      const _b = parseFloat(b);
      if(matchingRows === 2) {
        if (_a + _b == 2020) {
          val = _a * _b;
          return;
        }
      }
      else {
        inputArr.forEach(c => {
          const _c = parseFloat(c);
          if (_a + _b + _c == 2020) {
            val = _a * _b * _c;
            return;
          }
        });
      }
    });
        
    if (val) {
      return;
    }
  });

  return val;
}

export default calc;