import React, {useState} from "react"
import styled from 'styled-components'
import {SqButton, SoftButton} from '~/components/general/components'

import forrest from '~/images/forrest.jpg'
import bBall from '~/images/bowlingBall.svg'

const Container = styled.div`
margin-top: 90px;
display: flex;
width: 100%;
justify-content: space-between;

`

const Text = styled.div`
width: 50%;
margin-right: 60px;


h2{
  -webkit-text-stroke: 3px var(--char);
  margin: -20px 0 0;
  font-family: obviously-narrow, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 72px;
  color: var(--yellow);
  letter-spacing: 2px;
}

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
  margin-bottom: 40px;

}
`

const Image = styled.div`
width: 50%;
padding-bottom: 50%;
outline: 4px solid var(--char);
background-image: url(${props => props.pic});
background-size: cover;
background-position: center center;
position: relative;
`

const Bowling = styled.div`
position: absolute;
width: 120px;
height: 120px;
bottom: 0;
left: -122px;
background-image: url(${bBall});
`

const AboutBlock = (props) => {

return(
  <Container>
    <Text>
      {props.text}
      <SoftButton buttonText="CONTACT US"/>
    </Text>
    <Image pic={forrest}>
    <Bowling/>
    </Image>
  </Container>
)

}

export default AboutBlock
