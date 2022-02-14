import React, { Component } from 'react'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import './ProductsListItem.css'
import PropTypes from 'prop-types'

export class ProductsListItem extends Component {

    state = {
        productCount: 1,
        color: 'green',

    }
    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1,
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1,
        }))
    }

    render() {
        const { name, description, type, capacity, price, image } = this.props
        return (
            <>
                <Card>
                    <CardContent>
                        <div className='product-img'>
                            <img src={image} />
                        </div>
                        <h4> {name} </h4>
                        <p>{description}</p>
                        <div >Color: {this.state.color}</div>
                        <Button variant="contained" onClick={() => this.setState({ color: 'red' })}>Change color</Button>
                        <div className='product-features'>Type: {type}</div>
                        <div className='product-features'>Capacity: {capacity} Gb</div>
                        <div className='product-price'>{price} $</div>
                        <div class="product-quantity">
                            <Button variant="contained" onClick={() => this.onDecrementClick()}>-</Button>
                            <TextField size="small" value={this.state.productCount} />
                            <Button variant="contained" onClick={() => this.onIncrementClick()}>+</Button>
                        </div>

                    </CardContent>
                    <CardActions className='wrap-btn-add-to-cart'>
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </Card>
            </>
        )
    }
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
    description: 'No description...',
    image: "/images/no.jpg"
}

