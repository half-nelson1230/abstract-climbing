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

export const Logo = styled.div`

display: flex;
align-items: center;
grid-column: auto / span 2;
min-width: 280px;
a{
img{
&.logoImage{
  width: 100%;
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
  margin-right: 30px;
  line-height: 18px;
  outline: 4px solid var(--char);
  background-color: var(--cream);
  padding: 5px 10px;
  font-size: 18px;
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
    padding: 10px 10px;
    font-size: 18px;
    transition: 0.1s ease-in;
    margin-top: -10px;
    position: relative;
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
