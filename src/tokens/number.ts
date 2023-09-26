const digits = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const ten = {
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};
const tens = {
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

// TODO: All combination of tens and digits
// ([tT]wenty|[tT]hirty)( |-)([tT]hree|[tT]wo)

export const numberStringRegexOptions = `${Object.keys(digits).join(
  '|',
)}|${Object.keys(ten).join('|')}|${Object.keys(tens).join('|')}`;

const numberMap: Record<string, number> = { ...digits, ...ten, ...tens };

/**
 * Get the integer form of a number written out as a string. For example: 'thirty' -> 30
 * @param str
 */
export const getNumber = (str: string): number => {
  const isLiteral = !isNaN(Number(str));
  // If its a literal number like '2' - just return that
  if (isLiteral) {
    return Number(str);
  }
  let p1: string[] = [str];
  // Supports 'twenty three' and 'twenty-three'
  if (str.indexOf(' ') > -1) {
    p1 = str.split(' ');
  }
  if (str.indexOf('-') > -1) {
    p1 = str.split('-');
  }
  let total = 0;
  p1.forEach(s => {
    total += numberMap[s] || 0;
  });
  return total;
};
