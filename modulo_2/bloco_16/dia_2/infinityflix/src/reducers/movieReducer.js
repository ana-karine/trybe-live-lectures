import categoriesData from '../data';
import SELECT_MOVIE from '../actions/index';

const INITIAL_STATE = {
  selectedCategory: {}, // categories[0] = Animação
  selectedMovie: {}, // categories[0].movies[0] = Toy Story
  categories: [...categoriesData],
};

function movieReducer(state = INITIAL_STATE, action) {
  // state: é o estado anterior ou o estado inicial da aplicação;
  // action: a ação realizada (o clique, a digitação, a seleção de uma opção etc)
  switch(action.type) {
    case SELECT_MOVIE:

    // const stateAntes = {
    //   selectedCategory: "Animação",
    //   selectedMovie: "Toy Story",
    //   categories: [...categoriesData]
    // }

      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
        selectedMovie: action.payload.selectedMovie,
      };

    // const stateDepois = {
    //   selectedCategory: "Fantasia",
    //   selectedMovie: "Harry Potter e a Pedra Filosofal",
    //   categories: [...categoriesData]
    // }

    default:
      return state;
  }
}

export default movieReducer;
