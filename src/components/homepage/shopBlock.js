import React, {useState} from "react"
import styled from 'styled-components'
import {SqButton, SoftButton} from '~/components/general/components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'gatsby'

import img1 from '~/images/overstock-holds-holds-page.jpg'
import img2 from '~/images/fungus-family-holds-page.jpg'
import img3 from '~/images/chunks-family-holds-page.jpg'
import img4 from '~/images/innies-family-all-holds-collection-page-Studio_Family-Full.jpg'

import arrow from '~/images/arrow.svg'
import arrowFull from '~/images/arrowFull.svg'

const Container = styled.div`
margin-top: 60px;
`

const Top = styled.div`
font-family: obviously-narrow, sans-serif;
font-weight: 700;
font-style: normal;
font-size: 48px;
color: var(--yellow);
letter-spacing: 2px;
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;


a{
  display: flex;
  align-items: center;
}



h2{
  -webkit-text-stroke: 3px var(--char);
  margin: -20px 0 0;
}

`

const ArrowLine = styled.div`
  height: 5px;
  width: 100%;
  background-color: var(--char);
  margin: 0 20px;
  position: relative;

    span{
      width: 14px;
      height: 14px;
      border-radius: 2px;
      border-top: 5px solid var(--char);
      border-right: 5px solid var(--char);
      position: absolute;
      right: 0px;
      top: -5px;
      transform: rotate(45deg);
    }
`
export const ShopHold = styled.div`
position: relative;
width: calc((100% - 60px) / 3);
flex-shrink: 0;
margin-right: 30px;
transform: translateX(calc((-100% - 30px) * ${props => props.mover}));
transition: 0.5s ease-in;
`

export const ShopBox = styled.div`
padding-bottom: 100%;
background-image: url(${props => props.image});
background-size: cover;
background-position: center center;
outline: 4px solid var(--char);

outline-offset: -4px;


`

export const BoxText = styled.div`
width: 100%;
border: 4px solid var(--char);
margin-top: -4px;
left: 0px;
background-color: var(--cream);
display: flex;
align-items: center;
justify-content: space-between;
h3{
  font-family: obviously-narrow;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 28px;
  line-height: 32px;
  margin: 0;
  padding: 0 10px 5px;
}
`

export const CornerArrow = styled.div`
height: 50px;
width: 50px;
border-left: 4px solid var(--char);
background-color: var(--yellow);
background-image: url(${arrow});
background-size: 50%;
background-repeat: no-repeat;
background-position: center center;
:hover{
  background-image: url(${arrowFull});
  cursor: pointer;
}
`


const Main = styled.div`
width: 100%;
position: relative;
div{
  position: relative;

}
`

const Boxes = styled.div`
display: flex;
width: 100%;
position: relative;
align-items: flex-end;
position: relative;
margin-top: 20px;
overflow: hidden;

`

const TextHold = styled.div`
display: flex;
width: 100%;
top: 0;
grid-column-gap: 30px;
justify-content: flex-end;
`

const ProductText = styled.div`
width: calc(50% - 30px);
h3{
  font-family: obviously-narrow;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  -webkit-text-stroke: 2.5px var(--char);
  color: var(--cream);
  font-size: 48px;
  letter-spacing: 2px;
  line-height: 48px;
}
p{
  width: 100%;
  font-family: obviously;
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 20px;
}
`

export const Arrow = styled.button`
width: 40px;
height: 40px;
background-image: url(${arrow});
background-color: rgba(0,0,0,0);
border: none;
background-size: contain;
background-position: center center;
background-repeat: no-repeat;
:hover{
  cursor: pointer;
  background-image: url(${arrowFull})
}

&.flip{
  transform: rotate(180deg);
}
`

export const Buttons = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
margin: 20px 0 0;
`

const colors = [img1, img2, img3, img4]

const ShopBlock = (props) => {

const [counter, countUp] = useState(0);

const counterSub = counter - 1;
const addOne = () => {
  if(counter < colors.length - 3){
  countUp(counter + 1);}
}

const minusOne = () => {
  if(counter > 0){
    countUp(counter - 1);
  }
}

return(
  <Container>
    <Top>
      <h2>SHOP</h2>
      <ArrowLine><span/></ArrowLine>
      <Link to="/shop"><SqButton
        buttonText="All Products"
      /></Link>
    </Top>

    <Main >


    <Boxes >

    {props.slider}



    </Boxes>
    <TextHold>

      {props.arrows}



    </TextHold>
    </Main>
  </Container>
)

}

export default ShopBlock
