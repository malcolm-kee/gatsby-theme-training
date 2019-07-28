/**
 * @param {string} hex
 */
export function getContrastTextColor(hex) {
  const threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  return cBrightness > threshold ? '#000000' : '#ffffff';
}

function cutHex(h) {
  return h.charAt(0) === '#' ? h.substring(1, 7) : h;
}
function hexToR(h) {
  return parseInt(cutHex(h).substring(0, 2), 16);
}
function hexToG(h) {
  return parseInt(cutHex(h).substring(2, 4), 16);
}
function hexToB(h) {
  return parseInt(cutHex(h).substring(4, 6), 16);
}
