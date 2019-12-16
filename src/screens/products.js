import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Spin, Button } from 'antd'
import StarRatings from 'react-star-ratings'
import Container from '../components/Container'
import Text from '../components/Text'
import { fetchProducts, manageCart } from '../redux/actions/'
import CartComponent from '../components/CartComponent'
import ProductComponent from '../components/ProductComponent'
function Products({
  fetchProducts,
  manageCart,
  product: { loading, products },
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

export default connect(mapStateToProps, { fetchProducts, manageCart })(Products)
