export const calc = (input) => {
  const inputRows = input.split('\n');
  let seatIdMax = 0;
  
  inputRows.forEach(r => {
    const seatId = getSeatId(r);
    seatIdMax = Math.max(seatIdMax, seatId);
  });

  return seatIdMax;
}

export const calcTwo = (input) => {
  const inputRows = input.split('\n');
  let mySeat = null;
  const seats = [];
  
  inputRows.forEach(r => {
    seats[(getSeatId(r))] = true;
  });
  
  Object.keys(seats).forEach(seatId => {
    const _sid = parseInt(seatId);
    if(!seats[_sid + 1] && seats[_sid + 2]) {
      console.log(_sid);
      mySeat = _sid + 1;
    }
  });

  return mySeat;
}

const getSeatId = (r) => {
  const row = parseInt(r.slice(0, 7).replaceAll('F', 0).replaceAll('B', 1), 2);
  const col = parseInt(r.slice(7, 10).replaceAll('L', 0).replaceAll('R', 1), 2);
  return (row * 8) + col;
}
