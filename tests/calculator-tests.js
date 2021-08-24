const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Should sum two positive integers', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
    });

    it('Should sum many numbers', () => {
      expect(calculator.sum(2, 3, 7, 12)).to.equal(24);
    });

    it('Should sub two positive integers', () => {
      expect(calculator.sub(3, 2)).to.equal(1);
    });

    it('Should mul two positive integers', () => {
      expect(calculator.mul(5, 5)).to.equal(25);
    });

    it('Should div two positive integers', () => {
      expect(calculator.div(10, 2)).to.equal(5);
    });
  
});
