import React, {useState} from "react"
import TopBlock from '~/components/homepage/topBlock'
import ShopBlock, {ShopHold, ShopBox, BoxText, CornerArrow, Buttons, Arrow} from '~/components/homepage/shopBlock'
import AboutBlock from '~/components/homepage/aboutBlock'
import bgImage from '~/images/bgImg.png'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Helmet from 'react-helmet'
import {SqButton, SoftButton} from '~/components/general/components'

const IndexPage = ({data}) => {

  const breakpoints = useBreakpoint();

  const products = data.allShopifyProduct.edges
  const items = data.datoCmsHomepage.featuredProducts
  const homePage = data.datoCmsHomepage
  const [counter, countUp] = useState(0);

  const counterSub = counter - 1;
  const addOne = () => {
    if(counter < items.length - 3){
    countUp(counter + 1);}
  }

  const addOneSmall = () => {
    if(counter < items.length - 1){
    countUp(counter + 1);}
  }

  const addOneMed = () => {
    if(counter < items.length - 2){
    countUp(counter + 1);}
  }

  const minusOne = () => {
    if(counter > 0){
      countUp(counter - 1);
    }
  }


  const SliderArrows = () => {
  return(  <Buttons>
    <Arrow className="flip" onClick={minusOne}/>
    {breakpoints.xxs ?
      <>
      <Link to="/shop"><SqButton
        buttonText="All Products"
      /></Link>
      <Arrow onClick={addOneSmall}/>

      </> :
    <>


    {breakpoints.xs ?
      <Arrow onClick={addOneMed}/>
      :
      <Arrow onClick={addOne}/>
    }
    </>
  }

    </Buttons>
)
  }

  const SliderShop = () => {



    return(
      <>
      {items.map((thing, index) => {
        const checker = thing.test

        let pic;
        if(thing.featuredImage === null){
          pic = null
        } else{
          pic = thing.featuredImage.url
        }

        console.log(pic);
        console.log(checker);
        return(
        <>
        {products.map(({node}) =>
        {
          if(checker === node.handle){
            return(
              <ShopHold mover={counter}>
              <Link to={`/shop/${node.handle}`}>

              <ShopBox  image={pic} className={`${index === counter ? 'yes' : ''}`}>
              </ShopBox>
              <BoxText>
                <h3>{node.title}</h3>
                <CornerArrow/>
              </BoxText>
              </Link>

              </ShopHold>
            )
          }else return null
        }
        )}

        </>
      )})}
      </>
    )
  }

  return (
    <>
    {breakpoints.xs ? <Helmet><body class='nav-switch' /></Helmet> : null}
    <TopBlock
      text={<div dangerouslySetInnerHTML={{__html: data.datoCmsHomepage.introText}}></div>}
      bg={bgImage}
    />
    <ShopBlock slider={<SliderShop/>} arrows={<SliderArrows/>}/>
    <AboutBlock
    text={<div dangerouslySetInnerHTML={{__html: data.datoCmsHomepage.aboutText}}></div>}
    />
    </>
  )
}


export const query = graphql`
  {
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
    datoCmsHomepage {
   aboutImage {
     url
   }
   aboutText
   introText
   featuredProducts {
     featuredImage {
       url
     }
     test
   }
 }
  }
`

export default IndexPage
