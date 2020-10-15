const assert = require('assert');

// PARAMETRO REST: Sintaxe permite que a passagem de parametro seja feita em um único parametro.

// Com array
const sumAll = (values) => {
  let sum = 0;
  values.forEach(value => {
    sum += value;
  });
  return sum;
};

const sumAllOperands = (...operands) => {
  return operands.reduce((acc, currentValue) => acc + currentValue);
}

assert.strictEqual(sumAll([1, 2]), 3); // 1 parametro: array
assert.strictEqual(sumAll([1, 2, 3]), 6);
assert.strictEqual(sumAll([1, 2, 3, 4, 5]), 15);

// Com operands
assert.strictEqual(sumAll(1, 2), 3); // 2 parametros: 1 número, 1 número
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);
