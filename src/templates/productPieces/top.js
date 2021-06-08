import React, { useState, useContext, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import Client from 'shopify-buy'

import StoreContext from '~/context/StoreContext'
import ContextProvider from '~/provider/ContextProvider'


const Container = styled.div`
display: flex;
gap: 30px;
`

const Image = styled.img`
width: 50%;
outline: 4px solid var(--char);

`

const Text = styled.div`
width: 50%;
color: var(--char);
p{
  font-family: obviously;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
}
`

const HeadPrice = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

h2{
  font-family: obviously-narrow;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  font-size: 48px;
  color: var(--cream);
  -webkit-text-stroke: 2.5px var(--char);
  letter-spacing: 2px;
  line-height: 52px;
}

h3{
  font-family: obviously;
  font-weight: 500;
  margin: 0;
  font-size: 24px;
  :before{
    content: '$'
  }
}
`



const TopPiece = (props, {data}) => {

  return(
    <>

    {/*
      <Image src={props.image}/>
      <Text>
      <HeadPrice>
        <h2>{props.head}</h2>
        <h3>{props.price}</h3>
      </HeadPrice>
        <p>{props.description}</p>
        <p>{props.measurements}</p>

        {props.Form}
      </Text>
      */}

        {props.Form}

    </>
  )
}

TopPiece.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        image: PropTypes.arrayOf(
          PropTypes.shape({
            originalSrc: PropTypes.string,
          })
        ),
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default TopPiece
