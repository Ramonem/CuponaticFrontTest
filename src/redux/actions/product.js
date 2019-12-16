import { message } from 'antd'
import { API } from '../../config/api'
import { getGeo } from '../../utils'
import {
  LOADING,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  ORDER_PRODUCTS,
} from './types'
export const fetchProducts = () => async dispatch => {
  dispatch({ type: LOADING })
  try {
    const products = await API.fetchProducts()
    dispatch({ type: FETCH_PRODUCTS, products })
  } catch (error) {
    message.error(error.message)
    dispatch({ type: FETCH_PRODUCTS_ERROR, error })
  }
}

export const orderProduct = (order, products) => async dispatch => {
  const dictionary = {
    titulo: () => products.sort((a, b) => a.titulo.localeCompare(b.titulo)),
    min_valor_oferta: () =>
      products.sort(
        (a, b) =>
          parseInt(a.valor_oferta.replace(`$`, ``).replace(/\./g, ``), 10) -
          parseInt(b.valor_oferta.replace(`$`, ``).replace(/\./g, ``), 10),
      ),
    max_valor_oferta: () =>
      products.sort(
        (a, b) =>
          parseInt(b.valor_oferta.replace(`$`, ``).replace(/\./g, ``), 10) -
          parseInt(a.valor_oferta.replace(`$`, ``).replace(/\./g, ``), 10),
      ),
    calificaciones_numerica: () =>
      products.sort(
        (a, b) =>
          parseFloat(b.calificaciones_numerica) -
          parseFloat(a.calificaciones_numerica),
      ),
    geo: async () => {
      try {
        const geo = await getGeo()
        const productsGeo = await API.fetchProducts(geo)
        return productsGeo
      } catch (error) {
        message.error(error.message)
        return dispatch({ type: FETCH_PRODUCTS_ERROR, error })
      }
    },
  }
  const orderProduct = await dictionary[order]()
  dispatch({ type: ORDER_PRODUCTS, products: orderProduct })
}
