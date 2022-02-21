import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import './ProductsListItem.css'
import PropTypes from 'prop-types';
export const ProductsListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addToCart,
    cartData,
}) => {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState("green")
    const onChangeColor = () =>
        setColor((value) => (value === "green" ? 'red' : 'green'))

    const onDecrementClick = () => {
        setCount(count - 1)
    }

    const onIncrementClick = () => {
        setCount(count + 1)
    }
    const elementUpdate = () => {
        setCount(count + 1 - 1)
    }

    cartData.count = count
    cartData.price = price

    console.log(cartData.countInCart)
    console.log(cartData.priceInCart)

    return (
        <>
            <Card>
                <CardContent>
                    <div className='product-img'>
                        <img src={image} alt="img" />
                    </div>
                    <h4> {name} </h4>
                    <p>{description}</p>
                    <div className='change-color'>Color:{color}</div>
                    <Button variant="contained" onClick={onChangeColor}>Change color</Button>
                    <div className='product-features'>Type: {type}</div>
                    <div className='product-features'>Capacity: {capacity} Gb</div>
                    <div className='product-price'>{price} $</div>
                    <div class="product-quantity">
                        <Button variant="contained" onClick={onDecrementClick} disabled={count <= 1} >-</Button>
                        <TextField size="small" value={count} />
                        <Button variant="contained" onClick={onIncrementClick} disabled={count >= 10}>+</Button>
                    </div>

                </CardContent>
                <CardActions className='wrap-btn-add-to-cart'>
                    <Button onClick={elementUpdate} variant="outlined" onClick={addToCart}    >Add to cart</Button>

                </CardActions>
            </Card>
        </>
    )
}


ProductsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductsListItem.defaultProps = {
    description: 'No description...'
}

ProductsListItem.defaultProps = {
    image: "/images/no.jpg"
}