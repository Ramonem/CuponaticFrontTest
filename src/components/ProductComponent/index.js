import React from 'react'
import StarRatings from 'react-star-ratings'
import { Button } from 'antd'
import Container from '../Container'
import Text from '../Text'

export default function ProductComponent({ product, manageCart }) {
  return (
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
      <Button onClick={() => manageCart(`add`, product)}>Agregar</Button>
    </Container>
  )
}
