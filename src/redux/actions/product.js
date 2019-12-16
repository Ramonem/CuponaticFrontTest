import { message } from 'antd'
import { API } from '../../config/api'
import { getGeo } from '../../utils'
import { LOADING, FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR } from './types'
export const fetchProducts = () => async dispatch => {
  console.log(`dispatch`)
  dispatch({ type: LOADING })
  try {
    const geo = await getGeo()
    const products = await API.fetchProducts(geo)
    dispatch({ type: FETCH_PRODUCTS, products })
  } catch (error) {
    message.error(error.message)
    dispatch({ type: FETCH_PRODUCTS_ERROR, error })
  }
}
