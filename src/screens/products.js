import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Spin, Select } from 'antd'
import Container from '../components/Container'
import Text from '../components/Text'
import { fetchProducts, orderProduct, manageCart } from '../redux/actions/'
import CartComponent from '../components/CartComponent'
import ProductComponent from '../components/ProductComponent'
const { Option } = Select
function Products({
  fetchProducts,
  manageCart,
  product: { loading, products },
  orderProduct,
}) {
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <Container>
      <Text fontSize={20}>Lista de descuentos</Text>
      {loading ? (
        <Container justifyContent="center" alignItems="center" width="100%">
          <Spin tip="Cargando.." />
        </Container>
      ) : (
        <Container flexDirection="row" flexWrap="wrap">
          <Container
            flex={3}
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
          >
            <Container
              justifyContent="center"
              alignItems="center"
              width="100%"
              p={10}
              flexDirection="row"
            >
              <Text mr={10}>Ordenar por</Text>
              <Select
                defaultValue="titulo"
                style={{ width: `25%` }}
                onChange={order => orderProduct(order, products)}
              >
                <Option value="titulo">Titulo</Option>
                <Option value="min_valor_oferta">Menor precio</Option>
                <Option value="max_valor_oferta">Mayor precio</Option>
                <Option value="calificaciones_numerica">
                  Mejor calificación
                </Option>
                <Option value="geo">Menor distancia</Option>
              </Select>
            </Container>
            {products.map(product => (
              <ProductComponent
                product={product}
                manageCart={manageCart}
                key={product.id_descuento}
              />
            ))}
          </Container>
          <CartComponent />
        </Container>
      )}
    </Container>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {
  fetchProducts,
  orderProduct,
  manageCart,
})(Products)
