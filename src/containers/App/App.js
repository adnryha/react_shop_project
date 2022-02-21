
import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'

export const App = () => {
    const [cartData, setCartData] = useState({
        totalCount: 0,
        totalPrice: 0,
        count: 0,
        price: 0,

    })

    const addProductToCart = (count, price) =>

        setCartData((prevState) => ({

            totalCount: prevState.totalCount + cartData.count,
            totalPrice: prevState.totalPrice + cartData.price * cartData.count,
        }))

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addToCart={addToCart} cartData={cartData} />

            <Footer />
        </>
    )
}

