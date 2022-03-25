/*
 * Variables
 * ---------
 */

/* Imports */

import { calcRem } from "./functions";
import { linearGradient } from "./mixins";

/* Colors */

const colors = {
  brandYellow: "#ffb404",
  brandYellowSecondary: "#ffd981",
  brandBlue: "#25c6fe",
  brandBlueSecondary: "#91e2fe",
  brandSalmon: "#f98c65",
  brandSalmonSecondary: "#fbc5b1",
  brandCoral: "#ef8b88",
  brandCoralSecondary: "#f5bdbb",
  brandPurple: "#5d5cb0",
  brandPurpleSecondary: "#93a2ff",
  brandLime: "#bccf60",
  brandLimeSecondary: "#70c889",
  brandGreen: "#00eda4",
  highlightPink: "#ee85d3",
  highlightPurple: "#4140b0",
  highlightPurpleDark: "#302f84",
  white: "#ffffff",
  black: "#000000",
  charcoal: "#323b43",
  greyDark: "#697279",
  grey: "#dce4ec",
  greyLight: "#f7f7f7",
  sand: "#faf8f5",
};

/* Gradients */

const gradients = {
  highlightPurpleToHighlightPink: linearGradient({
    direction: "95.71deg",
    colorStops: [
      `${colors.highlightPurple} 50.58%`,
      `${colors.highlightPink} 108.72%`,
    ],
    fallback: colors.highlightPurple,
  }),
  highlightPinkToHighlightPurple: linearGradient({
    direction: "95.71deg",
    colorStops: [
      `${colors.highlightPink} -15.75%`,
      `${colors.highlightPurple} 54.64%`,
    ],
    fallback: colors.highlightPurple,
  }),
};

/* Fonts */

const fonts = {
  body: "'Rubik', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  heading: "'Poppins', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  weights: {
    light: 300,
    default: 400,
    medium: 500,
    bold: 700,
  }
};

/* Border radius */

const borderRadius = {
  "default": calcRem(3),
  "l": calcRem(5),
  "s": calcRem(2),
}

/* Breakpoints */

const breakpoints = {
  0: calcRem(0),
  424: calcRem(424),
  599: calcRem(599),
  799: calcRem(799),
  800: calcRem(800),
  991: calcRem(991),
  1199: calcRem(1199),
  1920: calcRem(1920),
};

/* Spacing */

const spacing = {
  "default": calcRem(16),
  "2xs": calcRem(4),
  "xs": calcRem(8),
  "s": calcRem(12),
  "m": calcRem(20),
  "l": calcRem(32),
  "xl": calcRem(40),
};

/* Header */

const headerHeight = calcRem(65);

/* Export */

export { colors, fonts, breakpoints, spacing, borderRadius, headerHeight, gradients };
