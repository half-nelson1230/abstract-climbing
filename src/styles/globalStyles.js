import { createGlobalStyle } from 'styled-components';

import pufflingReg from '~/fonts/PufflingV02-Regular.woff'
import pufflingReg2 from '~/fonts/PufflingV02-Regular.woff2'

const GlobalStyle = createGlobalStyle`
:root{
  --cream: #E8E4DD;
  --yellow: #FF9700;
  --char: #222222;
  --orange: #FF700E;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline-offset: -2px;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  outline-offset: -2px;
  }


html {

}

body{
  margin: 0;
  background-color: var(--cream);

  &.nav-switch{
    .navPosition{
      position: relative;
    }
  }
}

ul, li{
  list-style: none;
}

button{
  border: none;
}

input{
  outline: none;
  border: none;
}

@font-face{
  font-family: puffling;
  src: url(${pufflingReg});
  src: url(${pufflingReg2});
  font-weight: normal;
}

a{
  color: inherit;
  text-decoration: none;
}

.activeNav{
  background-color: var(--yellow) !important;
}

`

export default GlobalStyle
