const assert = require('assert');

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

// const name = richestDuckInTheWorld.name;
// const birthplace = richestDuckInTheWorld.birthplace;

const { name: duckName, birthplace } = richestDuckInTheWorld;

console.log(`${duckName} from ${birthplace}`);

assert.strictEqual(
  `${duckName} from ${birthplace}`,
  'Scrooge McDuck from Glasgow, Scotland'
);
