module.exports = class Calculator {
  sum() {
    let numbers = Array.prototype.slice.call(arguments);
    let final = 0;
    numbers.forEach(number => {
      final += number
    });
    return final;
  }

  sub(a, b) {
    return a - b;
  }

  mul(a, b) {
    return a * b;
  }

  div(a, b) {
    return a / b;
  }
}