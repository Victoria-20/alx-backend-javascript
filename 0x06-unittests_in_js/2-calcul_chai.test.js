// Import assert
const expect = require('chai');
const calculateNumber = require("./2-calcul_chai");

// Describe the test suite
describe('calculate Numbers', function() {
  // Describe the test case
  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('Return the expected result based on the type', () => {
    // Assert that the result matches the expected output
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

});
