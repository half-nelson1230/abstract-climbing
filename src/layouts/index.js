import React, {useState} from 'react'
import GlobalStyle from '~/styles/globalStyles.js'
import styled from 'styled-components'
import Nav from '~/components/nav/index'
import NavSmall from '~/components/nav/navSmall'
import Footer from '~/components/footer/footer'
import { StoreProvider } from '~/provider/ContextProvider'
import PropTypes from 'prop-types'
import Cart from '~/components/Cart/index'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Container = styled.div`
width: calc(100% - 60px);
margin: 30px auto;
position: relative;
min-height: 100vh;
`


const Layout = ({ children }) => {
const breakpoints = useBreakpoint();
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
    <StoreProvider>
    <GlobalStyle/>
    <Cart
      hider={clickHide}
      hidden={checkHidden}
    />
    <Container>

    {breakpoints.xs ?
      <NavSmall
        shower={clickShow}
      />

      :

      <Nav
        shower={clickShow}
      />

    }



      {children}
    </Container>
    <Footer/>
    </StoreProvider>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
