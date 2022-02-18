import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
export const Main = ({ addToCart, cartData }) => {
  return (
    <>
      <Container>
        <ProductsList
          addToCart={addToCart}
          cartData={cartData}
        />
      </Container>
    </>
  )
}