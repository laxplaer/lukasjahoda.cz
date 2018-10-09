import { css } from 'styled-components'

export const breakpoints = {
  desktop: 700,
}

// Iterate through the breakpoints and create a media template
const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(strings, ...args)};
    }
  `
  return accumulator
}, {})

export default mq
