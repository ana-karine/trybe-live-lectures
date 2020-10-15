const assert = require('assert');

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

const newPlayers = players.reduce((accumulator, currentValue) => {
  accumulator[currentValue.fullName] = currentValue.email;
  return accumulator;
}, {});

const expectedValue = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronaldinho Gaúcho': 'bruxo@futebol.br',
  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  'Túlio Maravilha': 'deputado@futebol.br'
};

console.log(newPlayers);

// Testes
assert.deepStrictEqual(newPlayers, expectedValue);
