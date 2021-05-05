import React from 'react'
import styled from 'styled-components'

const SquareButton = styled.button`
font-family: obviously;
font-weight: 500;
font-style: normal;
padding: 5px 20px;
font-size: 16px;
background-color: var(--yellow);
outline: 4px solid var(--char);
white-space: nowrap;
:hover{
  cursor: pointer;
  background-color: var(--orange);
}
`

const SftButton = styled.button`
font-family: obviously-narrow;
font-weight: 700;
font-style: normal;
padding: 0px 20px 5px;
font-size: 24px;
background-color: var(--yellow);
border: 4px solid var(--char);
white-space: nowrap;
border-radius: 10px;
text-transform: uppercase;
:hover{
  cursor: pointer;
  background-color: var(--orange);
}

`


export const SqButton = (props) => (
  <SquareButton>{props.buttonText}</SquareButton>
)

export const SoftButton = (props) => (
  <SftButton>{props.buttonText}</SftButton>
)
