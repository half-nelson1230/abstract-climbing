import React, { useState } from 'react';
import styled from 'styled-components'

export const PicHold = styled.div`
grid-column: 2 / span 2;

@media(max-width: 900px){
  grid-column: 1 / span 2;
}
@media(max-width: 500px){
  grid-column: 1 / span 4;
}
img{
  width: 100%;
  outline: 2px solid;
}
`

export const MainFixed=styled.div`
margin-top: calc(77px + var(--Margin));
position: relative;

@media(max-width: 750px){
  margin-top: calc(58px + var(--Margin));
}

a{
  &.active{
    div{
    background-color: #fff;
    color: #000;
    outline-color: #000 !important;
    position: relative;
    span{
      width: 5px;
      height: 100%;
      background-color: #000;
      opacity: 0.4;
      right: 0;
      position: absolute;
    }
    }

  }
}
`

export const Info = styled.div`
position: sticky;
top: calc(77px + var(--Margin));
right: var(--Margin);
height: fit-content;

@media(max-width: 750px){
  top: calc(58px + var(--Margin));
}

@media(max-width: 900px){
  grid-column: 3 / span2;
}
@media(max-width: 500px){
  grid-column: 1 / span 4;
}

h2, p, h3{
  margin: 0;
}

h2{
  font-family: eurostile-extended, eurostile;
  font-weight: 900;
}

h3{
  font-family: eurostile;
  font-weight: 900;
}

p{
  font-family: eurostile;
  font-weight: 300;
}

div{
&.outliner{
  outline: 2px solid;
  padding: 20px;
}
}
`


export const LabelsFixed=styled.div`
position: fixed;
top: calc(77px + var(--Margin));
left: var(--Margin);
width: calc((100% - var(--Margin) * 2) / 4);

@media(max-width: 1200px){
  width: 120px;
}

@media(max-width: 900px){
  width: calc((100% - var(--Margin) * 2) / 4);
}
`

export const Spacer=styled.div`
width: 100%;
height: 60px;
background-color: #fff;
top: 0;
position: fixed;
left: 0;
z-index: 12;
`

export const Select = styled.select`
width: 100%;
padding: 10px;
outline: 2px solid;
margin-top: var(--Margin);
font-family: eurostile;
font-weight: 800;
option{
  font-family: eurostile;
  font-weight: 800;
}

option:disabled::after{

    content: 'beep';

}
`

export const Atc = styled.button`
width: 100%;
padding: 10px;
outline: 2px solid;
margin-top: var(--Margin);
font-family: eurostile;
font-weight: 800;
background: #fff;
border: none;
:hover{
  background-color: #000;
  color: #fff;
  outline-color: #000 !important;
  cursor: pointer;
}
`
