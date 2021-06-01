import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import TopPiece from './productPieces/top'
import ProductForm from '~/ProductForm/index'
import {Link} from 'gatsby'

import arrow from '~/images/arrow.svg'
import arrowFull from '~/images/arrowFull.svg'


const Container = styled.div`
width: 100%;
margin-top: 30px;
`

const Return=styled.div`
display: flex;
font-family: obviously;
margin: 0;
margin: 0 0 30px;

h3{
  margin: 0;
}

span{
  width: 20px;
  transform: rotate(180deg);
  margin-right: 10px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;

}

:hover{
  cursor: pointer;
  span{
    background-image: url(${arrowFull});

  }
}
`


const ProductTemplate = ({ data }) => {

  const product = data.shopifyProduct
  const dato = data.allDatoCmsProduct.edges
  const formProduct =  <ProductForm product={product}/>;


  return(
    <Container>

    <Helmet>
    <body class='nav-switch' />
    </Helmet>
    <Return>
    <span/>
    <Link to="/shop"><h3>all products</h3></Link>
    </Return>
    {dato.map(({node}) =>{
      if(node.test === product.handle){
        let pic;
        if(node.featuredImage === null){
          pic = null
          }else{
          pic = node.featuredImage.url
            }
      return(
        <TopPiece
        head={product.title}
        price={product.priceRange.minVariantPrice.amount}
        description={node.description}
        measurements={node.measurements}
        image={pic}
        Form={formProduct}
        />
      )}
    })}
    </Container>
  )
}

export const query = graphql`
  query($handle: String!) {
    allShopifyProduct(sort: { fields: [title] }) {
  edges {
    node {
      id
      handle
      title
      productType
      shopifyId
    }
  }
}
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
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
            description
          }
        }
      }
  }
`

export default ProductTemplate
