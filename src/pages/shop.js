import * as React from "react"
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'


import arrow from '~/images/arrow.svg'
import arrowFull from '~/images/arrowFull.svg'

const Container = styled.div`
width: 100%;
margin: 30px auto;
h2{
  -webkit-text-stroke: 2.5px var(--char);
  font-family: obviously-narrow, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 48px;
  color: var(--yellow);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 30px;
}
`

const Items = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 30px;
grid-row-gap: 30px;

@media(max-width: 900px){
  grid-template-columns: repeat(2, 1fr);
}

@media(max-width: 600px){
  grid-template-columns: repeat(1, 1fr);
}
`

const Item = styled.div`
position: relative;
grid-column: auto / span 1;
`

const ItemPic = styled.div`
width: 100%;
padding-bottom: 100%;
background-image: url(${props => props.itemImage});
background-size: cover;
background-position: center center;
outline: 4px solid var(--char);
`

const TitleHold = styled.div`
h3{
  font-family: obviously-narrow;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 28px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 0 0 10px;
}
`

const ItemText = styled.div`
color: var(--char);
h3{
  font-family: obviously-narrow;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 28px;
  margin: 0;
  line-height: 32px;
  width: 100%;
  padding: 5px 0;
}
p{
  font-family: obviously;
  margin: 0;
  font-size: 16px;
  vertical-align: middle;
  font-weight: 500;
  span{
    font-size: 13px;

  }
}
`

const Holder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 0 10px;
position: relative;
min-height: 30px;
`

const Button = styled.button`
width: 30px;
height: 30px;
position: absolute;
right: 0;
top: 0;
bottom: 0;
border: none;
background-color: var(--cream);
outline: 3px solid var(--char);
background-image: url(${arrow});
background-size: 50%;
background-repeat: no-repeat;
background-position: center center;
:hover{
  background-color: var(--orange);
  cursor: pointer;
}
`



const ShopPage = ({data}) => {





  const products = data.allShopifyProduct.edges
  const items = data.allDatoCmsProduct.edges
  return (
    <Container>
    <Helmet>
  <body class='nav-switch' />
  </Helmet>

    <h2>Shop</h2>

    <Items>
    {items.map(({node}) =>{
      const checker = node.test
      const measurements = node.measurements
      let pic;
      if(node.featuredImage === null){
        pic = null
        }else{
        pic = node.featuredImage.url
          }
      return(
    <>
      {products.map(({node}) =>
      {
        if(checker === node.handle){
      return(
        <Link to={`/shop/${node.handle}`}>
        <Item>
        <ItemPic
        itemImage={pic}
        />
        <Holder>

        <ItemText>
        <h3>{node.title}</h3>

        <p>${node.priceRange.minVariantPrice.amount}<span>{measurements}</span></p>
        </ItemText>
        </Holder>
      </Item>
      </Link>
    )}else return null}

    )}
    </>
)}
    )}

    </Items>
    </Container>
  )
}

export const query = graphql`
  {
    allDatoCmsDisclaimer{
      edges{
        node{
          url
          title
        }
      }
    }
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          productType
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
    allDatoCmsProduct {
    edges {
      node {
        test
        measurements
        featuredImage {
          url
        }
      }
    }
  }
  }
`

export default ShopPage
