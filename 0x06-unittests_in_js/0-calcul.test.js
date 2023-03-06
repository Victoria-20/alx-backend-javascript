// Import assert
const assert = require('assert');
const calculateNumber = require("./0-calcul");

// Describe the test suite
describe('calculate Numbers', function() {
  // Describe the test case
  it('whole numbers', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('whole numbers', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('whole floating numbers', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('whole floating numbers', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});