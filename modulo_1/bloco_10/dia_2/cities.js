let cities = [];

function getCities() {
  return cities;
}

// Simula uma requisição síncrona, onde capturamos informacoes de cache, de forma síncrona
function retrieveCitiesFromCache() {
  cities.push("Fortaleza");
  cities.push("Belo Horizonte");
}

// Simula uma requisição assincrona, onde fazemos um request em um endpoint e recuperamos cidades
function requestCities() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push("Fortaleza");
      cities.push("Belo Horizonte");
      cities.push("São Paulo");
      cities.push("Recife");
      cities.push("Porto Alegre");
      cities.push("Goiânia");
      cities.push("Manaus");
      cities.push("Teresina");
      resolve();
    }, 2000);
  });
}

function removeCity(city) {
  const index = cities.indexOf(city);
  if (index > -1) cities.splice(index, 1);
}

function isCity(name) {
  return cities.includes(name);
}

function resetCities() {
  cities = [];
}

module.exports = { resetCities, getCities, removeCity, retrieveCitiesFromCache, requestCities, isCity }; 
