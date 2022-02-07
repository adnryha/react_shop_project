import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
export const ProductsListItem = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4> iPhone X </h4>
                    <p>This is iPhone X </p>
                    <div>Type: phone</div>
                    <div>Capacity:64 Gb</div>
                    <div>500$</div>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}