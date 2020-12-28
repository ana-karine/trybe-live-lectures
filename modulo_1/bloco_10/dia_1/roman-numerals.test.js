const convertToRoman = require('./roman-numerals');

describe('convert numbers from 1 to 4', () => {
  test('if convertToRoman using 1 returns "I"', () => {
    expect(convertToRoman(1)).toBe('I');
  });
  
  test('if convertToRoman using 2 returns "II"', () => {
    expect(convertToRoman(2)).toBe('II');
  });

  test('if convertToRoman using 3 returns "III"', () => {
    expect(convertToRoman(3)).toBe('III');
  });

  test('if convertToRoman using 4 returns "IV"', () => {
    expect(convertToRoman(4)).toBe('IV');
  });
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(5)).toBe('V');
  expect(convertToRoman(6)).toBe('VI');
  expect(convertToRoman(7)).toBe('VII');
  expect(convertToRoman(8)).toBe('VIII');
  expect(convertToRoman(9)).toBe('IX');
});

test('converts numbers from 10 to 15, 26 and 43', () => {
  expect(convertToRoman(10)).toBe('X');
  expect(convertToRoman(11)).toBe('XI');
  expect(convertToRoman(12)).toBe('XII');
  expect(convertToRoman(13)).toBe('XIII');
  expect(convertToRoman(14)).toBe('XIV');
  expect(convertToRoman(15)).toBe('XV');
  expect(convertToRoman(26)).toBe('XXVI');
  expect(convertToRoman(43)).toBe('XLIII');
});

test('converts numbers 50, 55 and 76', () => {
  expect(convertToRoman(50)).toBe('L');
  expect(convertToRoman(55)).toBe('LV');
  expect(convertToRoman(76)).toBe('LXXVI');
});

test('converts numbers 100, 200 and 227', () => {
  expect(convertToRoman(100)).toBe('C');
  expect(convertToRoman(200)).toBe('CC');
  expect(convertToRoman(227)).toBe('CCXXVII');
});

test('converts numbers 500, 576 and 981', () => {
  expect(convertToRoman(500)).toBe('D');
  expect(convertToRoman(576)).toBe('DLXXVI');
  expect(convertToRoman(981)).toBe('CMLXXXI');
});

test('converts numbers 1000, 2999 and 3000', () => {
  expect(convertToRoman(1000)).toBe('M');
  expect(convertToRoman(2999)).toBe('MMCMXCIX');
  expect(convertToRoman(3000)).toBe('MMM');
});