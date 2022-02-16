import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'

export const App = () => {
    const [cartData, setCartData] = useState({
        totalCount: 10,
        totalPrice: 1000,
    })

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
            <Footer />
        </>
    )
}
