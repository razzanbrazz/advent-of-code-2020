export const calc = (input) => {
  return calcSlope(input, 3, 1);
}

export const calcTwo = (input) => [
  calcSlope(input, 1, 1),
  calcSlope(input, 3, 1),
  calcSlope(input, 5, 1),
  calcSlope(input, 7, 1),
  calcSlope(input, 1, 2),
].reduce( (a, b) => a * b );

const calcSlope = (input, right, down) => {
  let encounters = 0;
  const inputRows = input.split('\n');
  const fieldWidth = inputRows[0].length;
  let posX = 0;

  for (let i = down; i < inputRows.length; i += down) {
    const row = inputRows[i];
    posX += right;
    if (posX >= fieldWidth) {
      posX = posX % fieldWidth;
    }

    if(row[posX] === '#') {
      encounters++;
    }
    
  }

  return encounters;
}
