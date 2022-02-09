import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { ProductsListItem } from "components/Products/ProductsListItem"
import { Grid } from '@mui/material'
import { productsArray } from 'components/Products/productsArray'
const useStyles = makeStyles({
  title:
  {
    margin: '30px 0',
    textTransform: 'upperCase',
  }
})

export const ProductsList = () => {
  const classes = useStyles()
  return (
    <>
      <Typography
        align="center"
        component="h1"
        variant="h4"
        className={classes.title}>

        Products List
      </Typography>

      <Grid container
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={3}>
        {productsArray.map((
          { id, name, description, type, capacity, price }
        ) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <ProductsListItem
              name={name}
              description={description}
              capacity={capacity}
              type={type}
              price={price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
