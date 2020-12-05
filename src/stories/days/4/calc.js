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

export const calcExistingProps = (input) => {
  const objects = buildObjects(input);

  const mandatoryProperties = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
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
const validateHgt = val => false;
const validateHcl = val => false;
const validateEcl = val => false;
const validatePid = val => false;

export const calcValidatedProps = (input) => {
  const objects = buildObjects(input);
  let val = 0;

  objects.forEach(row => {
    let valid = true;

    const keys = Object.keys(row);

    keys.forEach(key => {
      switch (key) {
        case 'byr':
          valid = valid && validateByr(row[key]);
          break;
      
        default:
          break;
      }
    })
    
    if(valid) {
      val++;
    }
  });

  return val;
}