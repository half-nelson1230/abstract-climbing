import React, { useContext } from 'react'
import {  Link } from 'gatsby'
import styled from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import {StoreContext} from '~/provider/ContextProvider'

const Item = styled.div`
width: 100%;
display: grid;
grid-template-columns: 120px 1fr 60px;
position: relative;
align-items: center;
outline: 2px solid var(--char);
outline-offset: -1px;
@media(max-width: 800px){
  grid-template-columns: 25% 1fr 25%;
}

@media(max-width: 500px){
  grid-template-columns: 33% 1fr;
}

@media(max-width: 700px){
  min-height: 170px;
}

img{
  position: relative;
  width: 100%;
  height: 120px;
  object-fit: cover;
  outline: 2px solid var(--char);
  outline-offset: -1px;

  @media(max-width: 700px){
    height: 100%;


  }
}
a{
  align-self: stretch;
  width: 100%;


}

h3{
  font-family: eurostile;
  font-weight: 800;
  margin: 0;
  font-size: 20px;
  text-align: left;
}
p{
  margin: 0;
  font-family: eurostile;
  font-weight: 300;
  font-size: 18px;
  @media(max-width: 600px){
    font-size: 16px;
  }

  &.color{
    justify-self: flex-end;
  }

  &.remover{
    :hover{
      cursor: pointer;
    }
  }
}
`

const BigButton = styled.button`
  outline: 2px solid var(--char);
  outline-offset: -1px;
  background-color: var(--cream);
  font-family: eurostile;
  font-weight: 800;
  font-size: 24px;
  padding: 20px;
  width: 30px;
  height: 30px;
  justify-self: flex-end;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
      background-color: var(--orange);
  }
`


const Info = styled.div`

width: 100%;
font-family: obviously;
margin-left: 30px;
@media(max-width: 600px){
  padding: 15px;
  margin-left: 0;
}
h4{
  margin: 5px 0;
  font-weight: 800;
}
p{
  margin: 5px 0;
}

button{
  border: 2px solid var(--char);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  font-family: obviously-narrow;
  font-weight: 800;
  font-size: 20px;
  background-color: var(--cream);
  span{
    margin-top: -5px;
  }
  :hover{
    cursor: pointer;
    background-color: var(--orange);
  }

}
`

const TitleSize = styled.div`
display: block !important;
width: fit-content !important;
h3, p{

}
`

const Qty = styled.div`
display: flex;
align-items: center;
p{
  margin: 0 10px;
  text-align: center;
  font-size: 24px;
}

@media(max-width: 600px){
  p{
    font-size: 20px;
  }
}
button{
  border: none;
  background: none;
  font-family: eurostile-extended;
  font-weight: 900;
  font-size: 18px;
  :hover{
    cursor: pointer;

  }
}

`

const Quantity = styled.div`
display: flex;
align-items: center;
p{
  margin-right: 10px;
}
h3{
  margin-right: 10px;
}

&.split{
  justify-content: space-between;

  @media(max-width: 600px){
    flex-wrap: wrap;
    h3{
      width: 100%;
    }
    p{
      width: 100%;
    }
  }

}


`


const LineItem = (props, {data} ) => {
  const breakpoints = useBreakpoint();

  const { item } = props
  const {
    removeLineItem,
    updateLineItem,
    client, checkout,
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.value === 'Default Title' ? '' : `${option.value}`}`
      )
    : null

  const handleRemove = () => {
    removeLineItem( checkout.id, item.id)
  }

  const handleAddOne = () => {
    updateLineItem( checkout.id, item.id, item.quantity + 1)
  }
  const handleMinOne = () => {
    updateLineItem( checkout.id, item.id, item.quantity - 1)
  }
  console.log(item.productType);




  return (
    <Item>
      {console.log(item)}
      {console.log(item.quantity)}

        {variantImage}

      <Info>
      <Quantity className="split">
      <h3>{item.title}</h3>
      <p className="color">{selectedOptions}</p>
      </Quantity>
      <Quantity>

      <button onClick={handleMinOne}><span>-</span></button>
      <p>{item.quantity}</p>
      <button onClick={handleAddOne}><span>+</span></button>
      <h4>${item.variant.price * item.quantity}</h4>
      </Quantity>

<p onClick={handleRemove} className="remover">remove item</p>      </Info>
    </Item>
  )
}




export default LineItem
