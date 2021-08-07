const INITIAL_STATE = {
  memes: [],
}

// function reducerMeme(state = INITIAL_STATE, action) {
//   return state;
// }

function reducerMeme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE':
      return {memes: action.data};
    default:
      return state;
  }
}

export default reducerMeme;
