const isValidToken = require('./isValidToken');

test('checks if a token is valid', () => {
  expect(isValidToken("HSB3KALA")).toBe(false);
});