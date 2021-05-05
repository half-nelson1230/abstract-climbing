import React from 'react'
import styled from 'styled-components'

import ladder from '~/images/ladder.svg'

const Container = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
width: 100%;
column-gap: 30px;
height: calc(100vh - 60px);
min-height: 650px;
align-items: center;

@media(max-width: 900px){
    height: 550px;
    min-height: 550px;
}
`

const Text = styled.div`
grid-column: auto / span 2;
h1{
  font-size: 44px;
  line-height: 46px;
  font-family: puffling;
  color: var(--yellow);
  -webkit-text-stroke: 1px var(--char);
  letter-spacing: 2px;
  margin: 0;
}

p{
  font-family: obviously;
  font-weight: 500;
  font-style: normal;
  color: var(--char);
}

@media(max-width: 1200px){

  h1{
    font-size: 36px;
    line-height: 38px;
  }
  p{
    font-size: 13px;
  }
}

@media(max-width: 900px){
    grid-column: auto / span 3;
}
`

const Image = styled.div`
outline: 4px solid var(--char);
grid-column: auto / span 4;
height: 100%;
background-image: url(${props => props.bgImage});
background-size: cover;
background-position: center center;
position: relative;
@media(max-width: 900px){
    grid-column: auto / span 3;
}
`

const Ladder = styled.div`
position: absolute;
bottom: -20px;
left: -10px;
width: 150px;
height: 200px;
background-image: url(${ladder});
background-size: contain;
background-repeat: no-repeat;
background-position: left bottom;
@media(max-width: 900px){
  width: 100px;
  height: 150px;
  bottom: -10px;
}
`

const TopBlock = (props) => {
    return(
      <Container>
        <Text>
          {props.text}
        </Text>
        <Image bgImage={props.bg}><Ladder/></Image>

      </Container>
    )
}

export default TopBlock
