import { MANAGE_CART } from './types'
export const manageCart = (
  action,
  { id_descuento, titulo, valor_oferta },
) => dispatch => {
  let localProducts = localStorage.getItem(`products`)
  if (localProducts) {
    localProducts = JSON.parse(localProducts)
    if (action === `add`) {
      const find = localProducts.find(
        product => product.id_descuento === id_descuento,
      )
      if (find) find.quantity += 1
      else
        localProducts.push({ id_descuento, titulo, quantity: 1, valor_oferta })
    } else if (action === `delete`) {
      localProducts = localProducts.filter(
        product => product.id_descuento !== id_descuento,
      )
    }
  } else {
    localProducts = [{ id_descuento, titulo, quantity: 1, valor_oferta }]
  }
  localStorage.setItem(`products`, JSON.stringify(localProducts))
  dispatch({ type: MANAGE_CART, cart: localProducts })
}
