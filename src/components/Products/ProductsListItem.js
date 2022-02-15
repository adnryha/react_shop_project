import React, { Component } from 'react'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import './ProductsListItem.css'
import PropTypes from 'prop-types'

export class ProductsListItem extends Component {

    state = {
        productCount: 1,
        colorGreen: 'green',
        colorRed: 'red',
        disabled: true,

    }
    colorChangeClick = () => {
        this.setState((State) => ({
            colorGreen: State.colorRed,
            colorRed: State.colorGreen,
        }))
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1,
        }))
        if (this.state.productCount > 10) {
            this.button.disabled = true
        } else {
            this.button.disabled = false
        }
    }
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1,
        }))
        if (this.state.productCount <= 1) {
            this.button.disabled = true
        } else {
            this.button.disabled = false
        }

    }
    render() {
        const { name, description, type, capacity, price, image, } = this.props
        return (
            <>
                <Card>
                    <CardContent>
                        <div className='product-img'>
                            <img src={image} />
                        </div>
                        <h4> {name} </h4>
                        <p>{description}</p>
                        <div className='color'>Color: {this.state.colorGreen}</div>
                        <Button variant="contained" onClick={() => this.colorChangeClick()}>Change color</Button>
                        <div className='product-features'>Type: {type}</div>
                        <div className='product-features'>Capacity: {capacity} Gb</div>
                        <div className='product-price'>{price} $</div>
                        <div class="product-quantity">
                            <Button variant="contained" disabled={!this.state.productCount} onClick={this.onDecrementClick}>-</Button>

                            <TextField size="small" onChange={e => this.setState({ value: e.target.value })} value={this.state.productCount} />
                            <Button variant="contained" disabled={!this.state.productCount} onClick={this.onIncrementClick}>+</Button>
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

// onChange = { e => this.setState({ value: e.target.value }) }
// disabled = {!this.state.productCount} 