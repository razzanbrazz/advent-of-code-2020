export const calc = (input) => {
  const inputRows = input.split('\n\n');
  let count = 0;
  
  inputRows.forEach(row => {
    const _row = row.replaceAll('\n', '');
    const charArr = [];
    for (let i = 0; i < _row.length; i++) {
      const char = _row[i];
      charArr[char] = charArr[char] ? charArr[char] + 1 : 1;
    }
    count += Object.keys(charArr).length;
  });

  return count;
}

export const calcTwo = (input) => {
  const inputRows = input.split('\n\n');
  let count = 0;
  
  inputRows.forEach(row => {
    const subRows = row.split('\n');
    const charArr = [];
    subRows.forEach(sRow => {
      for (let i = 0; i < sRow.length; i++) {
        const char = sRow[i];
        charArr[char] = charArr[char] ? charArr[char] + 1 : 1;
      };
    });
    Object.keys(charArr).forEach(char => {
      if(charArr[char] === subRows.length) {
        count++;
      }
    });
  });

  return count;
}
