import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyle } from '@mui/styles'

const useStyle = makeStyle({
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
        className={classes.title}


      >


        Products List
      </Typography>
    </>
  )
}