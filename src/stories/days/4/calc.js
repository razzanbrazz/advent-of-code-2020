// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID) - Optional

const buildObjects = (input) => {
  const inputArr = input.split('\n\n');

  const objects = inputArr.map(row => {
    const rowValues = row.replaceAll('\n', ' ').split(' ');
    const rowObj = {};

    rowValues.forEach(val => {
      const keyVal = val.split(':');
      if (keyVal.length > 1) {
        rowObj[keyVal[0]] = keyVal[1];
      }
    });

    return rowObj;
  });
  
  return objects;
}

const mandatoryProperties = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

export const calcExistingProps = (input) => {
  const objects = buildObjects(input);
  let val = 0;

  objects.forEach(row => {
    let valid = true;

    mandatoryProperties.forEach(prop => {
      if (!row[prop]) {
        valid = false;
      }
    });
    
    if(valid) {
      val++;
    }
  });

  return val;
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
//   If cm, the number must be at least 150 and at most 193.
//   If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const validateByr = val => parseInt(val) >= 1920 && parseInt(val) <= 2002;
const validateIyr = val => parseInt(val) >= 2010 && parseInt(val) <= 2020;
const validateEyr = val => parseInt(val) >= 2020 && parseInt(val) <= 2030;
const validateHgt = (val) => {
  const regex = RegExp('^1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in$');
  return regex.test(val);
};
const validateHcl = val => {
  const regex = RegExp('^#[0-9a-fA-F]{6}$');
  return regex.test(val);
};
const validateEcl = val => {
  const allowedEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return allowedEcl.includes(val);
};
const validatePid = val => {
  const regex = RegExp('^[0-9]{9}$');
  return regex.test(val);
};

export const calcValidatedProps = (input) => {
  const objects = buildObjects(input);
  let val = 0;

  objects.forEach(row => {
    let valid = true;

    const keys = Object.keys(row);

    mandatoryProperties.forEach(prop => {
      if (!row[prop]) {
        valid = false;
      }
    });

    keys.forEach(key => {
      switch (key) {
        case 'byr':
          valid = valid && validateByr(row[key]);
          break;
      
        case 'iyr':
          valid = valid && validateIyr(row[key]);
          break;
    
        case 'eyr':
          valid = valid && validateEyr(row[key]);
          break;
      
        case 'hgt':
          valid = valid && validateHgt(row[key]);
          break;
      
        case 'hcl':
          valid = valid && validateHcl(row[key]);
          break;
      
        case 'ecl':
          valid = valid && validateEcl(row[key]);
          break;
      
        case 'pid':
          valid = valid && validatePid(row[key]);
          break;

        default:
          break;
      }
    });

    console.log(valid);
    
    if(valid) {
      val++;
    }
  });

  return val;
}