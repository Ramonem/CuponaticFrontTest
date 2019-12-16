import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  ORDER_PRODUCTS,
  LOADING,
} from '../actions/types'

const initialState = {
  products: [],
  error: null,
  loading: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.products,
        loading: false,
      }
    }
    case FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    }
    case ORDER_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      }
    }
    case LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state
  }
}
