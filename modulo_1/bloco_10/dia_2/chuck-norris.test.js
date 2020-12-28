const { fetchChuckNorrisJoke, fetchChuckNorrisJokes, fetchChuckNorrisJokeFromId } = require('./chuck-norris');

// EXEMPLO COM AWAIT ASYNC
describe('When requesting a random chuck norris joke', () => {
  it('should return an object', async (done) => {
    const response = await fetchChuckNorrisJoke();
    expect(response).not.toBeNull();
    done();
  });
});

describe('When requesting chuck norris multiple jokes', () => {
  it('should return an array of length 3 when passing 3 as argument', async (done) => {
    const response = await fetchChuckNorrisJokes(3);
    expect(response).toHaveLength(3);
    done();
  });

  it('should fail when passing a string as argument', async (done) => {
    try {
      await fetchChuckNorrisJokes("3");
    } catch (error) {
      expect(error).toEqual('Parâmetro Inválido');
      done();
    }

    // return expect(fetchChuckNorrisJokes("3")).rejects.toEqual('Parâmetro Inválido');
    // SE FOREM USAR A FORMA ACIMA, RETIRAR O ASYNC E O DONE. :)
  });
});

describe('When requesting chuck norris a joke from a specific id', () => {
  it('should return the correct id when passing 15 as argument', () => {
    expect.assertions(2);
    return fetchChuckNorrisJokeFromId(15)
      .then((response) => {
        expect(response.id).toBe(15);
        expect(response.joke).toBe('When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.')
      });
  });

  it('should not return an null object', () => {
    return expect(fetchChuckNorrisJokeFromId(15)).resolves.not.toBeNull();
  });
});
