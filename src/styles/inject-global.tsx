import { injectGlobal } from 'styled-components'
import styles from '.'

/* tslint:disable */ 
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  html,
  body {
    width: 100%;
    height: 100%;
  }
  html {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    color: ${styles.colors.text};
    font-size: ${styles.font.size.normal};
    font-family: ${styles.font.family};
    font-weight: ${styles.font.weight.ligh};
    line-height: 1.2;
    min-width: 320px;
  }
  #root {
    height: 100%;
  }
  strong {
    font-weight: 600;
  }
  a svg:not([fill]) {
    fill: white;
 }
`
/* tslint:enable */ 