import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'

export const App = () => {
    const [cartData, setCartData] = useState({
        totalCount: 0,
        totalPrice: 0,
        countInCart: 0,
        priceInCart: 0,
    })

    const setTotalData = () => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + cartData.countInCart,

            totalPrice: prevState.totalPrice + cartData.priceInCart
        })

        )
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main setTotalData={setTotalData} cartData={cartData} />
            <Footer />
        </>
    )
}

