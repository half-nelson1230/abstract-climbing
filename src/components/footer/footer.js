import React, {useState} from "react"
import styled from 'styled-components'
import Signup from '~/components/mailchimp/mailchimp'
import {Link} from 'gatsby'

import fb from '~/images/fb.svg'
import ig from '~/images/ig.svg'
import mail from '~/images/mail.svg'

const Container = styled.div`
width: 100%;
background-color: var(--yellow);
border-top: 4px solid var(--char);
form{
  width: 33%;
}

display: flex;
justify-content: space-between;
`

const Menu = styled.div`
display: flex;
width: 33%;
margin-right: 30px;
margin-top: 30px;
`

const Icons = styled.div`
display: flex;
flex-wrap: wrap;
a{
  width: 30px;
  height: 30px;
  margin-right: 30px;
  margin-top: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  &.fb{
    background-image: url('${fb}');
  }

  &.ig{
    background-image: url('${ig}');
  }

  &.mail{
    background-image: url('${mail}');
  }
}

`

const SubMenu = styled.ul`
width: 50%;
margin-left: 30px;

a{
  :hover{
    color: var(--cream);
  }

}

li{
font-family: obviously;
font-weight: 500;
width: 100%;


strong{
  font-family: obviously-narrow;
  font-weight: 800;
  border-bottom: 2px solid var(--char);
  display: block;
  text-transform: uppercase;
}
}
`

const Footer = () => {
  return(
  <Container>
  <Signup
  title="hi"
  text="Join our mailing list for periodic updates:"
  submitText="submit"
  successText="thanks for signing up!"
  />

  <Menu>
    <SubMenu>
    <li><strong>Menu</strong></li>
    <Link to="/"><li>Home</li></Link>
    <Link to="/shop"><li>Shop</li></Link>

    </SubMenu>

    <SubMenu>
    <li><strong>Elsewhere</strong></li>
    <Icons>
    <a href="https://www.instagram.com/abstractclimbing/" className="ig"></a>
    <a href="mailto: info@abstractclimbing.com" className="mail"></a>

    </Icons>

    </SubMenu>
  </Menu>
  </Container>
)}

export default Footer
