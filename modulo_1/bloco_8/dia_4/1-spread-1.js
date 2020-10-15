const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];
const comedyBooks = ['HAHAHA'];

// UTILIZANDO FOR
let awesomeBooks = [];

for (let i = 0; i < horrorBooks.length; i++) {
  awesomeBooks.push(horrorBooks[i]);
}

for (let i = 0; i < scifiBooks.length; i++) {
  awesomeBooks.push(scifiBooks[i]);
}

// UTILIZAR O SPREAD OPERATOR

const books = [...horrorBooks, ...scifiBooks];

// UTILIZANDO SPREAD OPERATOR

assert.deepStrictEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
);

assert.deepStrictEqual(
  books,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
);
