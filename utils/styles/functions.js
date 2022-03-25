/*
 * Functions
 * ---------
 */

/* Convert to rem */

const calcRem = (n) => {
  return `${n / 16}rem`;
};

/* Strip unit (rem) */

const stripUnit = (s) => {
  return parseFloat(s.replace("rem", ""));
};

/* Convert hex to rgb (source: https://css-tricks.com/converting-color-spaces-in-javascript) */

const hexToRgb = (h = "", isPct = true) => {
  let r = 0;
  let g = 0;
  let b = 0;

  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  if (isPct) {
    r = `${+((r / 255) * 100).toFixed(1)}%`;
    g = `${+((g / 255) * 100).toFixed(1)}%`;
    b = `${+((b / 255) * 100).toFixed(1)}%`;
  } else {
    r = +r;
    g = +g;
    b = +b;
  }

  return [r, g, b].join(", ");
};

/* Export */

export { calcRem, stripUnit, hexToRgb };
