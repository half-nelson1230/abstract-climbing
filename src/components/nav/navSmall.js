import React, { useContext, useState } from 'react'
import {Link} from 'gatsby'
import {Container, Logo, Links, CartNum, Button, Menu, Items} from './stylesSmall'
import reduce from 'lodash/reduce'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import {StoreContext} from '~/provider/ContextProvider'


import burger from '~/images/burger.svg'
import bag from '~/images/bag.svg'
import logoImg from '~/images/logoFull.svg'
import logoSmall from '~/images/logo.svg'

const useQuantity = () => {
  const { checkout, loading } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const NavSmall = (props) => {
  const [hasItems, quantity] = useQuantity()
  const breakpoints = useBreakpoint();

  const [menuVis, menuToggle] = useState(false);
  const menuSwitch = () => {
    menuToggle(!menuVis)
  }
  console.log(menuVis);
  return(
    <Container className="navPosition">
    <Logo>
      <Link to="/">
      {breakpoints.xs ? <img className="logoImage" src={logoSmall}/> : <img className="logoImage" src={logoImg}/>}
      </Link>
    </Logo>
    <Links>
      <li><button onClick={menuSwitch}>Menu</button></li>
      <li><button onClick={props.shower}>Cart<CartNum>{quantity}</CartNum></button></li>
    </Links>
      <Menu className={menuVis ? '' : 'shown'}>
        <Items>
        <Link to="/" onClick={menuSwitch}>Home</Link>
        <Link to="/shop" onClick={menuSwitch}>Shop</Link>
        <a href="mailto:info@abstractclimbing.com" onClick={menuSwitch}>Contact</a>
        <button onClick={menuSwitch}>X</button>
        </Items>
      </Menu>
    </Container>
  )
}

export default NavSmall
