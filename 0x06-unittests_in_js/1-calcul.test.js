// Import assert
const assert = require('assert');
const calculateNumber = require("./1-calcul");

// Describe the test suite
describe('calculate Numbers', function() {
  // Describe the test case
  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

});
