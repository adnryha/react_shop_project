import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
export const ProductsListItem = (props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4> {props.name} </h4>
                    <p>{props.description}</p>
                    <div>Type: {props.type}</div>
                    <div>Capacity: {props.capacity}</div>
                    <div>{props.price} $</div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}