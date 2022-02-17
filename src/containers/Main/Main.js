import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
export const Main = ({ setTotalData, cartData }) => {
  return (
    <>
      <Container>
        <ProductsList
          setTotalData={setTotalData}
          cartData={cartData}
        />
      </Container>
    </>
  )
}