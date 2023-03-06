// Import assert
const assert = require('assert');
const calculateNumber = require("./0-calcul");

// Describe the test suite
describe('calculate Numbers', function() {
  // Describe the test case
  it('should add two rounded numbers together', function() {
    // Define the inputs
    const num1 = 1;
    const num2 = 3.7;

    // Define the expected output
    const expected = 5;

    // Call the function and store the result
    const result = calculateNumber(num1, num2);
    // Assert that the result matches the expected output
    assert.equal(result, expected);
  });
});