import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
// import otherReducer from './otherReducer';

export default combineReducers({
  movieReducer,
  // otherReducer
});


// state com mais de um reducer:
// {
//   movieReducer: {
//     selectedCategory: {},
//     selectedMovie: {},
//     categories: [...categoriesData],
//   },
//   otherReducer: {
//     other: ''
//   }
// }
