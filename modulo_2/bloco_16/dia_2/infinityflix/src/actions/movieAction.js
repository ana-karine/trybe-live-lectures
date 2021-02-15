import SELECT_MOVIE from './index';

// função que retorna o objeto da action
export default function selectMovie(selectedCategory, selectedMovie) {
  return {
    type: SELECT_MOVIE,
    payload: {
      selectedCategory,
      selectedMovie,
    },
  };
}

// payload --> dados que a action quer enviar para o store
