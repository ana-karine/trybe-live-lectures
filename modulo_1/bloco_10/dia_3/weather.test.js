let { fetchWeatherForCity } = require('./weather');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('When requesting weather api', () => {
  it('should return a sun emoji when weatherCondition is sun', async (done) => {

    const mockedJson = {
      weatherCondition: 'sun'
    };

    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockedJson),
    }));

    const response = await fetchWeatherForCity('Teresina');
    expect(response).toBe('🌞');
    done();
  });

  it('should return a cloud emoji when weatherCondition is cloud', async (done) => {

    const mockedJson = {
      weatherCondition: 'cloud'
    };

    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockedJson)
    }));

    const response = await fetchWeatherForCity('Belo Horizonte');
    expect(response).toBe('⛅️');
    done();
  });

  it('should throw error when paramenter is empty', async (done) => {

    try {
      await fetchWeatherForCity();
    } catch (error) {
      expect(error).toBe('City was not provided');
      done();
    }

  })
});
