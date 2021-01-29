import { ADD_TO_CART } from '../action';

const INITIAL_STATE = {
  cart: [],
  totalPrice: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.product }],// Adiciona meu produto no array
        totalPrice: state.totalPrice + action.product.price
      }
    default:
      return state;
  }
}

export default reducer;


// ERRADO NO REDUX: NÃO SE PODE MUTAR DADOS
// O STATE TEM QUE SER IMUTÁVEL
// let array = [1]

// function addArray(array){
//   let toot = array.push(2)
//   return toot
// }

// array = [1,2]
// toot = [1,2]
