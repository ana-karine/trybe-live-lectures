const { 
  getCities, 
  removeCity, 
  retrieveCitiesFromCache, 
  requestCities, 
  isCity, 
  resetCities 
} = require('./cities');

beforeEach(() => {
  console.log("before each antes do describe");
});

describe('Retrieving cities from cache', () => {
  // setup => Executa função ANTES de cada testes unitário
  beforeEach(() => {
    retrieveCitiesFromCache();
  });

  // teardown => Executa função DEPOIS de cada teste unitário
  afterEach(() => {
    resetCities();
  });

  it('should have 2 cities after retrieving from cache', () => {
    expect(getCities()).toHaveLength(2);
  });

  it('should have 1 city after remove Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    expect(getCities()).toHaveLength(1);
  });
});