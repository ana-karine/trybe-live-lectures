const fetch = require('node-fetch');

const fetchChuckNorrisJoke = async () => {
  const response = await fetch('http://api.icndb.com/jokes/random');
  const json = await response.json();
  const joke = json.value;
  return joke;
};

const fetchChuckNorrisJokes = async (numberOfJokes) => {
  checkParameter(numberOfJokes);
  const response = await fetch(`http://api.icndb.com/jokes/random/${numberOfJokes}`);
  const json = await response.json();
  return json.value;
};

const fetchChuckNorrisJokeFromId = async (id) => {
  checkParameter(id);
  const response = await fetch(`http://api.icndb.com/jokes/${id}`);
  const json = await response.json();
  return json.value;
};

const checkParameter = (parameter) => {
  if (typeof(parameter) !== 'number') {
    throw 'Parâmetro Inválido';
  }
};

module.exports = { fetchChuckNorrisJoke, fetchChuckNorrisJokes, fetchChuckNorrisJokeFromId };