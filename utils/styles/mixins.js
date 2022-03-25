/*
 * Mixins
 * ------
 */

/* Imports */

import { breakpoints } from "./variables";
import { stripUnit } from "./functions";

/* Media queries */

const breakpointMin = (min, content) => {
  if (!Object.prototype.hasOwnProperty.call(breakpoints, min)) return "";

  return `
    @media only screen and (min-width: ${breakpoints[min]}) {
      ${content}
    }
  `;
};

const breakpointMax = (max, content) => {
  if (!Object.prototype.hasOwnProperty.call(breakpoints, max)) return "";

  return `
    @media only screen and (max-width: ${breakpoints[max]}) {
      ${content}
    }
  `;
};

const breakpointMinMax = (min, max, content) => {
  if (
    !Object.prototype.hasOwnProperty.call(breakpoints, min) ||
    !Object.prototype.hasOwnProperty.call(breakpoints, max)
  )
    return "";

  return `
    @media only screen and (max-width: ${breakpoints[max]}) and (min-width: ${breakpoints[min]}) {
      ${content}
    }
  `;
};

/* Fluid sizing between breakpoints */

const fluidSize = ({
  prop = "font-size",
  sizes = [],
  widths = [],
  important = false,
  otherValues = "",
}) => {
  const lastIndex = sizes.length - 1;

  let output = "";

  sizes.forEach((s, i) => {
    const w = widths[i];
    const ww = breakpoints[w];
    let o = "";
    let m = "";

    if (Array.isArray(otherValues)) o = otherValues[i];

    if (important) m = "!important";

    if (i === 0) {
      output += `${prop}: ${s} ${o} ${m};`;
    }

    if (i === lastIndex) {
      output += breakpointMin(w, `${prop}: ${s} ${o} ${m};`);
    } else {
      const nextS = sizes[i + 1];
      const nextW = widths[i + 1];
      const nextWw = breakpoints[nextW];

      output += breakpointMin(
        w,
        `
        ${prop}: calc(${s} + ((100vw - ${ww}) / (${stripUnit(
          nextWw
        )} - ${stripUnit(ww)})) * (${stripUnit(nextS)} - ${stripUnit(
          s
        )})) ${o} ${m};
      `
      );
    }
  });

  return output;
};

/* Gradient */

const linearGradient = ({
  direction = "to bottom",
  colorStops = [],
  fallback = "",
}) => {
  colorStops = colorStops.join(", ");
  return `
    background: ${fallback};
    background: -moz-linear-gradient(${direction}, ${colorStops});
    background: -webkit-linear-gradient(${direction}, ${colorStops});
    background: -o-linear-gradient(${direction}, ${colorStops});
    background: linear-gradient(${direction}, ${colorStops});
  `;
};

/* Touch target */

const touchTarget = () => {
  return `
    &::before {
      content: "";
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  `;
};

/* Export */

export {
  breakpointMin,
  breakpointMax,
  breakpointMinMax,
  fluidSize,
  linearGradient,
  touchTarget,
};
