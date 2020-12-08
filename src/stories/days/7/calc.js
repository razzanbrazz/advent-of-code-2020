const buildBagMap = (input) => {
  const rows = input.split('\n');
  const bags = [];

  rows.forEach((row, i) => {
    const split = row.replace('.', '').split(' bags contain ');

    let contains = [];
    if(split[1] !== 'no other bags') {
      const insides = split[1].split(', ');
      insides.forEach(bag => {
        let _bag = bag.replace(' bags', '').replace(' bag', '');
        const quantity = _bag.slice(0, _bag.indexOf(' '));
        _bag = _bag.slice(quantity.length, _bag.length).trim();
        contains.push({
          name: _bag,
          quantity: parseInt(quantity),
        });
      });      
    }

    bags.push({
      "name": split[0],
      "id": i,
      "contains": contains,
    });
  });

  return bags;
}

const buildBagInsideMap = (input) => {
  const rows = input.split('\n');
  const bags = [];

  rows.forEach((row, i) => {
    const split = row.split(' bags contain ');
    bags.push({
      "name": split[0],
      "id": i,
      "inside": [],
    });
  });

  rows.forEach((row, i) => {
    const split = row.replace('.', '').split(' bags contain ');
    if(split[1] !== 'no other bags') {
      const insides = split[1].split(', ');
      insides.forEach(bag => {
        let _bag = bag.replace(' bags', '').replace(' bag', '');
        const quantity = _bag.slice(0, _bag.indexOf(' '));
        _bag = _bag.slice(quantity.length, _bag.length).trim();
        const mathingBag = bags.find(b => b.name === _bag);
        mathingBag.inside.push(i);
      });      
    }
    
  });

  return bags;
}

export const calc = (input) => {
  const bags = buildBagInsideMap(input);

  const shiny = bags.find(b => b.name === 'shiny gold');
  const trace = [...shiny.inside];
  let keepGoing = true;
  
  while(keepGoing) {
    let noAddition = true;
    trace.forEach(t => {
      const insBag = bags.find(bag => bag.id === t);
      if (insBag) {
        insBag.inside.forEach(ins => {
          if(trace.indexOf(ins) < 0) {
            trace.push(ins);
            noAddition = false;
          }
        });
      }
    });
    if (noAddition) {
      keepGoing = false;
    }
  }

  return trace.length;
}

export const calcTwo = (input) => {
  const bags = buildBagMap(input);
  const shiny = bags.find(b => b.name === 'shiny gold');
  const trace = [...shiny.contains];
  let traceIndex = 0;
  let keepGoing = true;
  
  while(keepGoing) {
    let noAddition = true;
    const traceLength = trace.length;
    trace.forEach((t, i) => {
      if(i >= traceIndex) {
        const containedBag = bags.find(bag => bag.name === t.name);
        containedBag.contains.forEach(c => {
          trace.push({
            name: c.name,
            quantity: c.quantity * t.quantity,
          });
        });
      }
    });
    if (traceIndex >= trace.length - 1) {
      keepGoing = false;
    } else {
      traceIndex = traceLength;
    }
  }

  let traceCount = 0;
  
  trace.forEach(t => {
    traceCount += parseInt(t.quantity);
  });

  console.log(bags, trace);

  return traceCount;
}
