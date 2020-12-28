const convertToInteger = require('./integer-numerals');

test('converts I, II, III and IV to integer', () => {
  expect(convertToInteger('I')).toBe(1);
  expect(convertToInteger('II')).toBe(2);
  expect(convertToInteger('III')).toBe(3);
  expect(convertToInteger('IV')).toBe(4);
});

test('converts V, VI, VII, VIII and VIII to integer', () => {
  expect(convertToInteger('V')).toBe(5);
  expect(convertToInteger('VI')).toBe(6);
  expect(convertToInteger('VII')).toBe(7);
  expect(convertToInteger('VIII')).toBe(8);
  expect(convertToInteger('IX')).toBe(9);
});

test('converts X, XI, XII, XIII, XIV, XV, XXVI and XLIII to integer', () => {
  expect(convertToInteger('X')).toBe(10);
  expect(convertToInteger('XI')).toBe(11);
  expect(convertToInteger('XII')).toBe(12);
  expect(convertToInteger('XIII')).toBe(13);
  expect(convertToInteger('XIV')).toBe(14);
  expect(convertToInteger('XV')).toBe(15);
  expect(convertToInteger('XXVI')).toBe(26);
  expect(convertToInteger('XLIII')).toBe(43);
});

test('converts L, LV and LXXVI to integer', () => {
  expect(convertToInteger('L')).toBe(50);
  expect(convertToInteger('LV')).toBe(55);
  expect(convertToInteger('LXXVI')).toBe(76);
});

test('converts C, CC, CCXXVII to integer', () => {
  expect(convertToInteger('C')).toBe(100);
  expect(convertToInteger('CC')).toBe(200);
  expect(convertToInteger('CCXXVII')).toBe(227);
});

test('converts D, DLXXVI and CMLXXXI to integer', () => {
  expect(convertToInteger('D')).toBe(500);
  expect(convertToInteger('DLXXVI')).toBe(576);
  expect(convertToInteger('CMLXXXI')).toBe(981);
});

test('converts M, MMCMXCIX and MMM to integer', () => {
  expect(convertToInteger('M')).toBe(1000);
  expect(convertToInteger('MMCMXCIX')).toBe(2999);
  expect(convertToInteger('MMM')).toBe(3000);
});

test('raises an error if argument is not a string', () => {
  expect(() => { convertToInteger(1234) })
    .toThrow(/Argument must be a string/);
});

test('raises an error if argument contain invalid characters', () => {
  expect(() => { convertToInteger('XXIT') })
    .toThrow(/Argument can't contain invalid roman symbols/);

  expect(() => { convertToInteger('ZVLD') })
    .toThrow(/Argument can't contain invalid roman symbols/);
});
