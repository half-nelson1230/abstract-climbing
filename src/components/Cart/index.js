import React, { useContext } from 'react'
import styled from 'styled-components'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

//styled components
const Container = styled.div`
position: relative;
width: 50%;
position: fixed;
background-color: var(--cream);
margin-left: var(--Margin);
z-index: 150;
right: 0;
top: 0;
border-left: 4px solid var(--char);
min-height: 100vh;
padding: 30px;
transition: 0.25s ease-in;

&.hidden{
  right: -50%;
}

img{
display: block;
&.bigImage{
  width: 100%;
}

&.halfImage{
  width: 50%;
}
}

h3{
  font-family: eurostile;
  font-weight: 800;
  margin: 5px;
}
`

const WhiteOut = styled.div`
position: fixed;
top: 0; bottom: 0; right: 0; left: 0;
background-color: #fff;
opacity: 90%;
z-index: 14;
`

const BgHide = styled.button`
position: fixed;
top: 0;
left: 0;
width: 100%;
bottom: 0;
z-index: 14;
background: none;

&.hidden{
  display: none;
}
`


const Items = styled.div`

`

const Price = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
position: relative;
margin-top: 2px;
outline: 2px solid var(--char);
outline-offset: 0;
@media(max-width: 800px){
  grid-template-columns: 25% 1fr 25%;
}

@media(max-width: 500px){
  grid-template-columns: 1fr 33%;
}


button{
  outline: 2px solid;
  outline-offset: 0;

  border: none;
  font-family: obviously-narrow;
  font-weight: 800;
  font-size: 18px;
  align-self: stretch;
  padding: 20px;
  background-color: var(--cream);
  @media(max-width: 500px){
    text-align: center;
    padding: 0;
  }
  :hover{
    cursor: pointer;

    background-color: var(--orange);
  }
}
`

const Spacer = styled.div`
position: relative;
width: 100%;
height: auto;

`

const PriceItems = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(2, 1fr);
align-items: center;
padding: 30px;

@media(max-width: 600px){
  padding: 15px;
}

@media(max-width: 500px){
  display: flex;
}
p{
  margin: 0;
  font-family: eurostile;
  font-weight: 800;
  text-align: right;
  @media(max-width: 500px){
    margin-left: 10px;
  }
}
h2{
  font-family: eurostile;
  font-weight: 800;
  margin: 0;
  font-size: 20px;
  text-align: left;
}
`

const Toppy = styled.div`
display: flex;
font-family: obviously-narrow;
font-weight: 800;
width: 100%;
justify-content: space-between;

h2{
  font-size: 42px;
  margin: 0;
  text-transform: uppercase;
  font-family: puffling;
  letter-spacing: 2px;

  color: var(--yellow);
  -webkit-text-stroke: 1.5px var(--char);
}

button{
  font-family: obviously-narrow;
  font-weight: 800;
  background: none;
  font-size: 24px;
  color: var(--cream);
  letter-spacing: 2px;
  text-transform: uppercase;
  -webkit-text-stroke: 1.5px var(--char);
  :hover{
    color: var(--orange);
    cursor: pointer;
  }
}
`


const Cart = (props) => {
  const breakpoints = useBreakpoint();


  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      <BgHide onClick={props.hider} className={props.hidden}/>
    <Container className={props.hidden}>

      <Toppy>
      <h2>Cart</h2>
      <button onClick={props.hider}>close</button>
      </Toppy>
      <Items>
      {lineItems}
      </Items>
      <Price>
      <PriceItems>
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      </PriceItems>
      <button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Checkout
      </button>

      </Price>

    </Container>
    </>
  )
}


export default Cart
