import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Spin, Button } from 'antd'
import StarRatings from 'react-star-ratings'
import Container from '../components/Container'
import Text from '../components/Text'
import { fetchProducts, manageCart } from '../redux/actions/'
import CartComponent from '../components/CartComponent'
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
              <Container
                m="5px"
                p="10px"
                width={[`100%`, `25%`]}
                key={product.id_descuento}
                borderRadius="5px"
                boxShadow="0px 0px 5px 0px rgba(0,0,0,0.2);"
                height="fit-content"
              >
                <Text fontWeight="bold">{product.titulo}</Text>
                <img src={product.imagen_url} />
                <Container flexDirection="row" alignItems="center">
                  <Text mr="5px">Calificación: </Text>
                  <StarRatings
                    rating={parseFloat(product.calificaciones)}
                    starDimension="10px"
                    starSpacing="1px"
                    numberOfStars={10}
                  />
                </Container>
                <Text>{product.valor_oferta}</Text>
                {/* <Text fontWeight="bold">{product.titulo}</Text> */}
                <Button onClick={() => manageCart(`add`, product)}>
                  Agregar
                </Button>
              </Container>
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
