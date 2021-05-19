import React, { useContext } from 'react'
import {Link} from 'gatsby'
import logoImg from '~/images/logoFull.svg'
import {Container, Logo, Links, CartNum} from './styles'
import reduce from 'lodash/reduce'
import StoreContext from '~/context/StoreContext'
import ContextProvider from '~/provider/ContextProvider'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Nav = (props) => {
  const [hasItems, quantity] = useQuantity()



  return(
    <Container className="navPosition">
    <Logo>
      <Link to="/">
      <img className="logoImage" src={logoImg}/>
      </Link>
    </Logo>
    <Links>
      <li><Link to="/shop" activeClassName="activeNav">shop</Link></li>
      <li><a href="mailto: info@abstractclimbing.com">contact</a></li>
      <li><button onClick={props.shower}>Cart<CartNum>{quantity}</CartNum></button></li>
    </Links>
    </Container>
  )
}

export default Nav
