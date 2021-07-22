import * as React from "react"
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'

const Container = styled.div`
width: 100%;
margin: 30px auto;

@media(min-width: 601px){
  h2{ min-width: 500px; width: 66%;}
  p{ min-width: 500px; width: 66%;}
  h4{  min-width: 500px; width: 66%;}
}

@media(max-width: 600px){
  h2{ width: 100%;}
  p{ width: 100%;
}
  h4{  width: 100%;}
}

h2{
  font-family: obviously-narrow;
  font-weight: 800;
  font-size: 48px;
  margin: 0;

}

p{
  font-family: obviously;
  font-size: 14px;
  margin: 0;
}

h4{
  font-family: obviously-narrow;
  font-weight: 800;
  font-size: 32px;
  margin: 10px 0 0 0;
}

`

const TosPage = ({data}) => {
return(
  <Container>
  <Helmet>
<body class='nav-switch' />
</Helmet>
  <h2>{data.datoCmsDisclaimer.title}</h2>
  <div dangerouslySetInnerHTML={{__html: data.datoCmsDisclaimer.text}}></div>
  </Container>
)

}

export const query = graphql`
  query($url: String!) {
    allDatoCmsDisclaimer{
      edges{
        node{
          url
          title
        }
      }
    }
    datoCmsDisclaimer(url: {eq: $url}){
      url
      text
      title
    }
  }

`

export default TosPage
