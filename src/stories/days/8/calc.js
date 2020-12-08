export const calc = (input) => {
  const rows = input.split('\n');
  let acc = 0;
  let step = 0;
  const trace = [];
  let keepGoing = true;

  while(keepGoing) {
    const row = rows[step];
    const [instruction, value] = row.split(' ');
    trace.push(step);
  
    if (instruction === 'acc') {
      acc += parseInt(value);
      step++;
    }
    
    if (instruction === 'jmp') {
      step += parseInt(value);
    }
    
    if (instruction === 'nop') {
      step++;
    }

    if (trace.find(t => t === step)) {
      keepGoing = false;
    }
  }

  return acc;
}

export const calcTwo = (input) => {
  let rows = input.split('\n');
  let tweakedRows = input.split('\n');
  let acc = 0;
  let step = 0;
  let trace = [];
  let keepGoing = true;
  let reachedEnd = false;
  let iteration = -1;
  let lastIteration = -2;
  let changed = false;
  let count = 0;

  while(!reachedEnd && lastIteration !== iteration) {
    acc = 0;
    step = 0;
    trace = [];
    lastIteration = iteration;
    tweakedRows = input.split('\n');
    keepGoing = true;
    changed = false;

    rows.forEach((r, i) => {
      const [instruction, value] = r.split(' ');
      if (instruction === 'nop' && i > iteration && !changed) {
        tweakedRows[i] = `jmp ${value}`;
        iteration = i;
        changed = true;
      }
      if (instruction === 'jmp' && i > iteration && !changed) {
        tweakedRows[i] = `nop ${value}`;
        iteration = i;
        changed = true;
      }
    });

    while(keepGoing) {
      const row = tweakedRows[step];
      const [instruction, value] = row.split(' ');
      trace.push(step);
    
      if (instruction === 'acc') {
        acc += parseInt(value);
        step++;
      }
      
      if (instruction === 'jmp') {
        step += parseInt(value);
      }
      
      if (instruction === 'nop') {
        step++;
      }

      if (typeof trace.find(t => t === step) !== "undefined") {
        keepGoing = false;
      }

      if (step >= rows.length || iteration >= rows.length || count > 100000) {
        console.log('end reached! it took ', count, ' iterations');
        keepGoing = false;
        reachedEnd = true;
      }

      count++;
    }
  }

  return acc;
}
