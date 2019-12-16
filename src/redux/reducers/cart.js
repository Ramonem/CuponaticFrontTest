import { MANAGE_CART } from '../actions/types'

const initialState = {
  cart: localStorage.getItem(`products`)
    ? JSON.parse(localStorage.getItem(`products`))
    : [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MANAGE_CART: {
      return {
        ...state,
        cart: action.cart,
      }
    }
    default:
      return state
  }
}
