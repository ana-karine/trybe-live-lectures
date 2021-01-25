import categories from '../data';

const INITIAL_STATE = {
  selectedCategory: categories[0], // categories[0] = Drama
  selectedMovie: categories[0].movies[0], // categories[0].movies[0] = The boy in the striped pajamas
  categories: [...categories]
}

function movieReducer(state=INITIAL_STATE, action) {
  // state: é o estado anterior ou o estado inicial da aplicação;
  // action: a ação realizada (o clique, a digitação, a seleção de uma opção etc)
  if (action.type === "SELECT_MOVIE") {

    // const stateAntes = {
    //   selectedCategory: categories[0],
    //   selectedMovie: categories[0].movies[0],
    //   categories: [...categories]
    // }

    return {
      ...state,
      selectedCategory: action.category,
      selectedMovie: action.movie
    }

    // const stateDepois = {
    //   selectedCategory: "DRAMA",
    //   selectedMovie: "INTERSTELAR",
    //   categories: [...categories]
    // }

  }
  return state
}

export default movieReducer;
