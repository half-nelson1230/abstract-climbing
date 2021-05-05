import React from 'react'
import ContextProvider from '~/provider/ContextProvider'
import Cart from '~/components/Cart/index'
import Helmet from 'react-helmet'

const CartPage = () => (
  <>
  <Helmet>
  <body class='nav-switch' />
  </Helmet>
    <Cart/>
</>

)

export default CartPage
