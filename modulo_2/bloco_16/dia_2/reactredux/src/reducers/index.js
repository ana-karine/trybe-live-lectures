import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
// import otherReducer from './otherReducer';

export default combineReducers({
  movieReducer,
  // otherReducer
});

// State:
// {
//   movieReducer: {
//     selectedCategory: categories[0],
//     selectedMovie: categories[0].movies[0],
//     categories: [...categories]
//   },
//   otherReducer: {
//     other: ''
//   }
// }
