import React from 'react'
import { Table, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Text from '../Text'
import { manageCart } from '../../redux/actions/'

function CartComponent({ cart: { cart }, manageCart, isCart, history }) {
  return (
    <Container flex={1} width={[`100%`, `unset`]}>
      <Text fontSize="1rem">Carrito de compras</Text>
      <Table
        scroll={{ x: 500 }}
        rowKey="id_descuento"
        pagination={false}
        dataSource={cart}
        columns={[
          {
            title: `Producto`,
            dataIndex: `titulo`,
            key: `titulo`,
          },
          { title: `Cantidad`, dataIndex: `quantity`, key: `quantity` },
          {
            ...(!isCart && {
              title: `Acción`,
              render: product => (
                <Button onClick={() => manageCart(`delete`, product)}>
                  Eliminar
                </Button>
              ),
            }),
          },
          {
            ...(isCart && {
              title: `Precio`,
              key: `valor_oferta`,
              dataIndex: `valor_oferta`,
            }),
          },
          {
            ...(isCart && {
              title: `Totales`,
              render: ({ valor_oferta, quantity }) =>
                `$${(
                  parseInt(
                    valor_oferta.replace(`$`, ``).replace(/\./g, ``),
                    10,
                  ) * parseInt(quantity, 10)
                ).toLocaleString()}`,
            }),
          },
        ]}
      />
      {!isCart && cart.length >= 1 && (
        <Container alignItems="center">
          <Link to="/cart">Pagar</Link>
        </Container>
      )}
      {isCart && (
        <Container alignItems="flex-end">
          Total a pagar:{` `} $
          {cart
            .reduce((acc, product) => {
              acc +=
                parseInt(product.quantity, 10) *
                parseInt(
                  product.valor_oferta.replace(`$`, ``).replace(/\./g, ``),
                  10,
                )
              return acc
            }, 0)
            .toLocaleString()}
        </Container>
      )}
    </Container>
  )
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { manageCart })(CartComponent)
