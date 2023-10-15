import transformer from '../index';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['8-958-778-20-08', '+79587782008'],
])// eslint-disable-next-line
('testing transformer function with %s number', (number, expected) => {
  const result = transformer(number);
  expect(result).toBe(expected);
});