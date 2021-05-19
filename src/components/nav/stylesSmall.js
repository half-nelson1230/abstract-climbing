import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-column-gap: 30px;
align-items: center;
justify-content: space-between;
position: absolute;

`

export const Menu = styled.div`
position: fixed;
top: 0; left: 0; bottom: 0; right: 0;
background-color: var(--yellow);
z-index: 1;
transition: 0.5s ease-in;
display: flex;
justify-content: center;
align-items: center;
&.shown{
  transform: translateY(-100%);
}
`

export const Items = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 30px;
a{
  width: 100%;
  text-align: center;
  display: block;

  font-size: 32px;
  line-height: 46px;
  font-family: puffling;
  color: var(--yellow);
  -webkit-text-stroke: 2px var(--char);
  letter-spacing: 2px;
  margin: 0;
}

button{
  text-align: center;
  display: block;
  background: none;
  margin-top: 30px !important;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  font-size: 32px;
  line-height: 46px;
  font-family: puffling;
  color: var(--char);
  border: 4px solid var(--char);
  letter-spacing: 2px;
  margin: 0;

  :hover{
    background-color: var(--orange);
    cursor: pointer;
  }
}
`

export const Button = styled.button`
width: 40px;
height: 40px;
background-image: url(${props => props.bgImage});
margin-left: 30px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`

export const Logo = styled.div`

display: flex;
align-items: center;
grid-column: auto / span 2;
min-width: 100px;
z-index: 2;
a{
img{
&.logoImage{
  width: 70px;
  margin-right: 10px;
}

&.logoTypeImage{
  width: 320px;
}
}
}
`

export const Links = styled.ul`
display: flex;
grid-column: auto / span 4;
justify-self: end;
z-index: 10;


li{
  a{
  font-family: obviously, sans-serif;
  font-weight: 500;
  font-style: normal;
  line-height: 18px;
  outline: 4px solid var(--char);
  background-color: var(--cream);
  padding: 5px 10px;
  font-size: 16px;
  transition: 0.1s ease-in;

  :hover{
    background-color: var(--orange);
    cursor: pointer;
  }
  }
  button{
  font-family: obviously, sans-serif;
  font-weight: 500;
  font-style: normal;
  line-height: 18px;
  outline: 4px solid var(--char);
  background-color: var(--cream);
  padding: 9px 10px;
  font-size: 16px;
  transition: 0.1s ease-in;
  margin-top: -10px;
  position: relative;
  margin-left: 15px;

  :hover{
    background-color: var(--orange);
    cursor: pointer;
  }
  }

}
`

export const CartNum = styled.span`
background-color: var(--yellow);
position: absolute;
width: 36px;
height: 36px;
display: flex;
border-radius: 20px;
justify-content: center;
align-items: center;
top: -20px;
right: -20px;
border: 4px solid var(--char);
`
