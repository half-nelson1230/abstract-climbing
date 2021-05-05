import React, {useState} from 'react'
import GlobalStyle from '~/styles/globalStyles.js'
import styled from 'styled-components'
import Nav from '~/components/nav/index'
import Footer from '~/components/footer/footer'
import ContextProvider from '~/provider/ContextProvider'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import Cart from '~/components/Cart/index'

const Container = styled.div`
width: calc(100% - 60px);
margin: 30px auto;
position: relative;
min-height: 100vh;
`


const Layout = ({ children }) => {

  const [cartHide, changeHide] = useState(true);
  let checkHidden;

  const clickShow = () => {
    changeHide(false);
  }

  const clickHide = () => {
    changeHide(true);
  }

  if(cartHide === true){
    checkHidden = 'hidden'
  }else if(cartHide === false){
    checkHidden = ''
  }


  return (
    <ContextProvider>
    <GlobalStyle/>
    <Cart
      hider={clickHide}
      hidden={checkHidden}
    />
    <Container>
    <Nav
      shower={clickShow}
    />
      {children}
    </Container>
    <Footer/>
    </ContextProvider>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
