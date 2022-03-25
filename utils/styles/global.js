/*
 * Global styles
 * -------------
 */

/* Imports */

import { createGlobalStyle } from "styled-components";
import { colors, fonts, spacing } from "./variables";
import { calcRem, hexToRgb } from "./functions";
import { breakpointMax } from "./mixins";

/* Styles */

const GlobalStyles = createGlobalStyle`

  /* Text styles */

  .text-quote,
  .text-quote-s,
  .text-l,
  .text,
  .text-s,
  .text-xs,
  .text-2xs,
  .text-3xs {
    font-family: ${fonts.body};
    line-height: 1.5;
  }

  .text-quote {
    font-size: ${calcRem(24)};
  }

  .text-quote-s {
    font-size: ${calcRem(22)};
  }

  .text-quote,
  .text-quote-s {
    ${breakpointMax(
      800,
      `font-size: ${calcRem(20)};`
    )}
  }

  .text-l {
    font-size: ${calcRem(18)};

    ${breakpointMax(
      800,
      `font-size: ${calcRem(16)};`
    )}
  }

  .text {
    font-size: ${calcRem(16)};
  }

  .text-s {
    font-size: ${calcRem(15)};
  }

  .text-xs {
    font-size: ${calcRem(14)};
  }

  .text-2xs {
    font-size: ${calcRem(13)};
  }

  .text-3xs {
    font-size: ${calcRem(12)};
  }

  /* Font family */

  .ff-body {
    font-family: ${fonts.body};
  }

  .ff-heading {
    font-family: ${fonts.heading};
  }

  /* Font style */

  .fs-italic {
    font-style: italic;
  }

  /* Font weight */

  .fw-medium {
    font-weight: 500;
  }

  /* Line height */

  .lh-130-pc {
    line-height: 1.3;
  }

  /* Text align */

  .ta-center {
    text-align: center;
  }

  /* Colors */

  .c-charcoal {
    color: ${colors.charcoal};
    fill: ${colors.charcoal};
  } 

  .c-grey-dark {
    color: ${colors.greyDark};
    fill: ${colors.greyDark};
  }

  /* Background colors */

  .bg-white {
    background: ${colors.white};
  }

  .bg-grey {
    background: ${colors.grey};
  }

  .bg-grey-light {
    background: ${colors.greyLight};
  }

  .bg-sand {
    background: ${colors.sand};
  }
  
  /* Display */

  .d-block {
    display: block;
  }

  .d-inline-block {
    display: inline-block;
  }

  .d-flex {
    display: flex;
  }

  .d-grid {
    display: grid;
  }

  /* Flex / grid props */

  .fd-column {
    flex-direction: column;
  }

  .jc-center {
    justify-content: center;
  }

  .ai-center {
    align-items: center;
  }

  /* Float */

  .fl-left {
    float: left;
  }

  .fl-right, 
  .fl-right--dt {
    float: right;
  }

  .fl-right--dt {
    ${breakpointMax(
      991,
      `float: none;`
    )}
  }

  /* Width */

  .w-100-pc {
    width: 100%;
  }

  .mw-150 {
    max-width: ${calcRem(150)};
  }

  .mw-200 {
    max-width: ${calcRem(200)};
  }

  /* Height */

  .h-100-pc {
    height: 100%;
  }

  /* Position */

  .p-relative {
    position: relative;
  }

  .p-absolute {
    &,
    &.gatsby-image-wrapper { /* Position absolute doesn't work otherwise... */
      position: absolute;
    }
  }

  .t-0 {
    top: 0;
  }

  .t-50 {
    top: 50%;
    transform: translateY(-50%);
  }

  .l-0 {
    left: 0;
  }

  .r-0 {
    right: 0;
  }

  .b-0 {
    bottom: 0;
  }

  .tlrb-0 {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* Z index */

  .z-1 {
    z-index: 1;
  }

  /* Overflow */

  .o-hidden {
    overflow: hidden;
  }

  /* Margin */

  .m-auto {
    margin: auto;
  }

  .m-0 {
    margin: 0;
  }

  .m-0--lc {
    > *:last-child {
      margin: 0;
    }
  }

  .m-0--img {
    img {
      margin: 0;
    }
  }

  .mb-2xs {
    margin-bottom: ${spacing["2xs"]};
  }

  .mb-s {
    margin-bottom: ${spacing.s};
  }

  /* Padding */

  .pt-100-pc {
    padding-top: 100%;
  }

  .pl-10-pc {
    padding-left: 10%
  }

  .pr-10-pc {
    padding-right: 10%;
  }

  /* Border radius */

  .br-5 {
    &,
    &[data-main-image] {
      border-radius: ${calcRem(5)};
    }
  }

  .br-100-pc {
    &,
    &[data-main-image] {
      border-radius: 100%;
    }
  }

  /* Object fit */

  .of-cover {
    object-fit: cover;
  }

  /* Box shadow */

  .bs {
    box-shadow: 0 ${calcRem(3)} ${calcRem(12)} ${calcRem(3)} rgba(${hexToRgb(colors.black)}, 0.08);
  }

  /* Screen reader */

  .a11y-hide-vis {
    position: absolute;
    overflow: hidden;
    top: auto;
    left: ${calcRem(-10000)};
    width: ${calcRem(1)};
    height: ${calcRem(1)};
  }

  /* White space */

  .ws-normal {
    white-space: normal;
  }

`;

/* Export */

export default GlobalStyles;
