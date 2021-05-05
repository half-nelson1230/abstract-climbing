import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import { MainFixed, LabelsFixed, PicHold, Spacer, Info, Atc} from '~/templates/utilities/productStyles'
import styled from 'styled-components'
import StoreContext from '~/context/StoreContext'

const Counter = styled.div`
display: flex;
font-family: obviously;
font-weight: 500;
margin-right: 30px;
`

export const Select = styled.select`
padding: 0px 10px;
height: 40px;

outline: 4px solid var(--char);
font-family: obviously-narrow;
margin: 0 30px 0 0;
font-weight: 800;
background-color: var(--cream);
text-transform: uppercase;

option{
  font-family: eurostile;
  font-weight: 800;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

option:disabled::after{

    content: 'beep';

}
`

const PlusMinus = styled.button`
width: 40px;
height: 40px;
outline: 4px solid var(--char);
font-size: 16px;
font-family: obviously-narrow;
font-weight: 800;
margin: 0;
display: flex;
align-items: center;
justify-content: center;
p{
  margin: 0;
  font-size: 16px;
}

:hover{
  cursor: pointer;
  background-color: var(--orange);
}
`

const Number = styled.div`
height: 40px;
padding: 0 20px;
outline: 4px solid var(--char);
display: flex;
align-items: center;
h3{
  margin: 0 0 5px;

}
`

const Buttons = styled.div`
display: flex;
align-items: middle;
margin-top: 30px;

button{
  :hover{
    cursor: pointer;
  }
}
`

const AddToCart = styled.button`
height: 40px;
background-color: var(--yellow);
display: flex;
align-items: center;
padding: 0 20px;
outline: 4px solid var(--char);
p{
  margin: 0;
  text-transform: uppercase;
  font-size: 14px;
}
:hover{
  cursor: pointer;
  background-color: var(--orange);
}
`

const ColorOption = styled.div`
width: 16px;
height: 16px;
background-color: ${props => props.bgColor};
border-radius: 8px;

&.selected{
  outline: 4px solid var(--char);
}
`

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding, checkout },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)
  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const plusOne = () => {
    setQuantity(quantity + 1)
  }

  const minusOne = () => {
    if(quantity > 1){
    setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /*
  Using this in conjunction with a select input for variants
  can cause a bug where the buy button is disabled, this
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways -
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)


  const orange = '#FF9700'
  const yellow = '#ffe601'
  const green = '#84A936'
  const purple = '#BB00EA'
  const gray = '#C4C4C4'

  return (
    <>


      <Buttons>
      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
        {values.length > 1 &&
          <>
          <Select
            name={name}
            key={id}
            onBlur={event => handleOptionChange(index, event)}
          >
            {values.map(value => {
              const disablee = checkDisabled(name, value);
              console.log(disablee);
              return(

              <option
                value={value}
                key={`${name}-${value}`}
                disabled={checkDisabled(name, value)}
              >
                {value} {disablee ? ' - out of stock' : ''}
              </option>
            )})}
          </Select>
        </>}
        </React.Fragment>
      ))}
      <Counter>
        <PlusMinus onClick={minusOne}><p>-</p></PlusMinus>
        <Number><h3>{quantity}</h3></Number>
        <PlusMinus onClick={plusOne}><p>+</p></PlusMinus>
      </Counter>
      <AddToCart
      type="submit"
      disabled={!available || adding}
      onClick={handleAddToCart}
      ><p>{available ? 'Add to Cart' : 'Out of Stock'}</p></AddToCart>
      </Buttons>
    </>
  )
}

ProductForm.propTypes = {
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

export default ProductForm
