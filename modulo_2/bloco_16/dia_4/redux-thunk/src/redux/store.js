import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducerMeme from './reducer/memes';

// const store = createStore(
//   reducerMeme,
//   window.devToolsExtension ? window.devToolsExtension() : (f) => f
// );

const store = createStore(reducerMeme, compose (
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

export default store;
