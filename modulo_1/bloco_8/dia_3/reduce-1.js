const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os números do array com for
let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  sumWithFor = sumWithFor + numbers[index];
}

// Somando os números do array com reduce
// 1. Reduce é uma função de alta ordem => HoF
// 2. Ele recebe como primeiro parametro, uma callback
// 3. O valor de previousValue será sempre o que for retornado anteriormente
// 3.1. A primeira vez que a função callback é executada, o previousValue assume o valor do primeiro elemento do array, CASO não tenha nenhum valor inicial
// 3.2. A primeira vez que função callback é executada, o previousValue assumo o valor do initialValue caso tenha.
// 4. O currentValue tras o valor corrente de cada iteração do array
const sumWithReduce = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

// 1 iteração: previousValue === 2 | currentValue === 3
// 2 iteração: previousValue === 5 | currentValue === 4
// 3 iteração: previousValue === 9 | currentValue === 6
// 4 iteração: previousValue === 15 | currentValue === 8
// 5 iteração: previousValue === 23 | currentValue === 12
// 6 iteração: previousValue === 35 | currentValue === 24
// Retorno => 59

console.log(`Valor com for: ${sumWithFor}`);
console.log(`Valor com reduce: ${sumWithReduce}`);

// Testes
const expectedValue = 59;
assert.strictEqual(sumWithFor, expectedValue);
assert.strictEqual(sumWithReduce, expectedValue);

// Some apenas os numeros pares do array
const sumEvenNumbersWithReduce = numbers
  .filter((number) => number % 2 === 0 )
  .reduce((previousValue, currentValue) => previousValue + currentValue);

  console.log(sumEvenNumbersWithReduce);
