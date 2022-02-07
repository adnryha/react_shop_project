import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { ProductsListItem } from "components/Products/ProductsListItem"
import { Grid } from '@mui/material'
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
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            name="iPhone 13 Pro"
            description="This is iPhone 13 Pro"
            capacity="128"
            type="phone"
            price="1100"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            name="iPhone 12 Pro"
            description="This is iPhone 13 Pro"
            capacity="64"
            type="phone"
            price="500" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            name="iPhone 11 Pro"
            description="This is iPhone 1 Pro"
            capacity="256"
            type="phone"
            price="1000" />
        </Grid>
      </Grid>
    </>
  )
}